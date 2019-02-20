import * as React from "react";
import { FlatList, FlatListProps, ListRenderItemInfo, ViewToken } from "react-native";
import FlatListItem from "./flat-list-item/flat-list-item";

export default class OptimizedFlatList<ItemT> extends React.PureComponent<FlatListProps<ItemT>> {
    private rowRefs: any[] = [];
    private listRef: any;

    public scrollToEnd = (params?: { animated?: boolean }) => {
        if (this.listRef) {
            this.listRef.scrollToEnd(params);
        }
    };

    public scrollToIndex = (params: {
        animated?: boolean;
        index: number;
        viewOffset?: number;
        viewPosition?: number;
    }) => {
        if (this.listRef) {
            this.listRef.scrollToIndex(params);
        }
    };

    public scrollToItem = (params: { animated?: boolean; item: ItemT; viewPosition?: number }) => {
        if (this.listRef) {
            this.listRef.scrollToItem(params);
        }
    };

    public scrollToOffset = (params: { animated?: boolean; offset: number }) => {
        if (this.listRef) {
            this.listRef.scrollToOffset(params);
        }
    };

    public render() {
        return (
            <FlatList
                ref={this.setRef}
                {...this.props}
                renderItem={this.renderItem}
                onViewableItemsChanged={this.onViewableItemsChanged}
            />
        );
    }

    private setRef = (ref: FlatList<ItemT>) => (this.listRef = ref);

    private addRowRefs = (ref: any, data: ListRenderItemInfo<ItemT>) => {
        this.rowRefs[data.index] = {
            index: data.index,
            item: data.item,
            ref
        };
    };

    private updateItem = (index: number, visibility: boolean) => {
        if (!this.rowRefs[index].ref) {
            return false;
        }
        this.rowRefs[index].ref.setVisibility(visibility);
        return visibility;
    };

    private renderItem = (data: ListRenderItemInfo<ItemT>) => {
        const view = this.props.renderItem(data);
        const setRef = (myItem: any) => this.addRowRefs(myItem, data);

        return <FlatListItem ref={setRef} viewComponent={view} data={data} />;
    };

    private onViewableItemsChanged = (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
        info.changed.map((item: any) => this.updateItem(item.index, item.isViewable));

        if (this.props.onViewableItemsChanged) {
            this.props.onViewableItemsChanged(info);
        }
    };
}
