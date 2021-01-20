import React from "react";
import { FibLocalNavigation, FIB_UNDERWRITING_JOURNEY } from "../fib.types";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { Loading } from "@atoms";
import { FibUnderwritingIntroduction } from "../../../../screens/products/fib/underwriting-journey/fib.underwriting-intro.screen";
import { useDispatch } from "react-redux";
import {
  UpsertProductEntityMutationTuple,
  GQL_MUTATION_UPSERT_TOP_UPS_PRODUCT_ENTITY,
} from "../../../../../graphql/products";
import { ProductCode } from "../../../../../graphql/_core/schema/globalTypes";
import { updateFIBValue } from "../../../../../redux/product/product.actions";
import { GetYulifer } from "../../../../../graphql/_core/schema";

interface Props {
  navigation: FibLocalNavigation;
}

function FibUnderwritingJourneyIntroductionContainer(props: Props) {
  const { navigation } = props;
  const { loading, error, data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const [upsertProductEntity]: UpsertProductEntityMutationTuple = useMutation(
    GQL_MUTATION_UPSERT_TOP_UPS_PRODUCT_ENTITY
  );
  const dispatch = useDispatch();

  const handleOnContinue = async () => {
    const { data: productEntityData } = await upsertProductEntity({
      variables: {
        product: ProductCode.YULFIB,
      },
    });
    dispatch(
      updateFIBValue({
        key: "productEntityId",
        value: productEntityData?.upsertTopUpsProductEntity?.id,
      })
    );
    return navigation.push(FIB_UNDERWRITING_JOURNEY);
  };

  if (loading || error) {
    return <Loading />;
  }

  return (
    <FibUnderwritingIntroduction
      avatar={data?.getYulifer.avatarRemoteFiles?.pngFull}
      onContinue={handleOnContinue}
      onNavigateBack={() => navigation.pop()}
    />
  );
}

export default FibUnderwritingJourneyIntroductionContainer;
