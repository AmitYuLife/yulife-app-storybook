import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { G, Path, Rect, Mask, Defs, ClipPath } from "react-native-svg";

import { YuProductStatus, CoverType } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";

type Status = YuProductStatus | CoverType;

interface IProps {
  status: Status;
  style: ViewStyle;
}
const Slot = ({ status, style }: IProps) => {
  return (
    <Svg width={Style.adjust(64)} height={Style.adjust(64)} viewBox="0 0 64 64" fill="none" style={style}>
      <G clipPath="url(#prefix__clip0)">
        <Path d="M0 9a9 9 0 019-9h46a9 9 0 019 9v46a9 9 0 01-9 9H9a9 9 0 01-9-9V9z" fill="#B9B9CC" />
        <Path d="M2 10a8 8 0 018-8h46a8 8 0 018 8v46a8 8 0 01-8 8H10a8 8 0 01-8-8V10z" fill="#fff" />
        <Rect x={2} y={2} width={60} height={60} rx={8} fill="#EFF0FA" />
        <Path d="M2 10a8 8 0 018-8h44a8 8 0 018 8v44a8 8 0 01-8 8H10a8 8 0 01-8-8V10z" fill="#E9E9F7" />
        <Rect x={4.5} y={4.5} width={55} height={55} rx={5.96} fill="#EFF0FA" stroke="#B9B9CC" />
        <Mask id="prefix__a" x={6} y={6} width={52} height={52}>
          <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#C4C4C4" />
        </Mask>
        <G mask="url(#prefix__a)">
          <Path
            d="M6 10.3A4.3 4.3 0 0110.3 6h43.4a4.3 4.3 0 014.3 4.3v43.4a4.3 4.3 0 01-4.3 4.3H10.3A4.3 4.3 0 016 53.7V10.3z"
            fill="#D8D8E9"
          />
          <Path fill="#C9C9DD" d="M55.091-2l32.285 25.869-51.092 60.163L4 58.163z" />
        </G>
        {getBackground(status)}
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h64v64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const getBackground = (status: Status) => {
  switch (status) {
    case CoverType.common:
      return CommonSlot;
    case CoverType.rare:
      return RareSlot;
    case CoverType.epic:
      return EpicSlot;
    case YuProductStatus.unlockable:
      return UnlockableSlot;
    default:
      return PlaceholderSlot;
  }
};

const CommonSlot = (
  <>
    <Rect x={2} y={2} width={60} height={60} rx={8} fill="#58E0AF" />
    <Rect x={4.5} y={4.5} width={55} height={55} rx={5.96} fill="#DBFFF0" stroke="#34B687" />
    <Mask id="prefix__b" x={6} y={6} width={62} height={62}>
      <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#prefix__b)">
      <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#65EFBD" />
      <Path fill="#58E0AF" d="M55.091-2l32.285 25.869-51.092 60.163L4 58.163z" />
    </G>
  </>
);

const RareSlot = (
  <>
    <Mask id="prefix__b" x={2} y={2} width={60} height={60}>
      <Rect x={2} y={2} width={60} height={60} rx={8} fill="#58E0AF" />
    </Mask>
    <G mask="url(#prefix__b)">
      <Rect x={2} y={2} width={60} height={60} rx={8} fill="#A8CAFF" />
      <Path d="M10.252-7.21L-7.5 10.543l61.341 61.341 17.752-17.752-61.341-61.34z" fill="#fff" fillOpacity={0.6} />
      <Path d="M5.385-3L-3 5.385l61.34 61.34 8.385-8.384L5.385-3z" fill="#fff" fillOpacity={0.74} />
    </G>
    <Rect x={4.5} y={4.5} width={55} height={55} rx={5.96} fill="#DAE9FF" stroke="#789DD6" />
    <Mask id="prefix__c" x={6} y={6} width={62} height={62}>
      <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#prefix__c)">
      <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#89B8FF" />
      <Path fill="#66A3FF" d="M55.091-2l32.285 25.869-51.092 60.163L4 58.163z" />
    </G>
  </>
);

const EpicSlot = (
  <>
    <Mask id="prefix__b" x={2} y={2} width={60} height={60}>
      <Rect x={2} y={2} width={60} height={60} rx={8} fill="#58E0AF" />
    </Mask>
    <G mask="url(#prefix__b)">
      <Rect x={2} y={2} width={60} height={60} rx={8} fill="#FFD600" />
      <Path d="M10.752-7L-7 10.752l61.34 61.34 17.753-17.751L10.752-7z" fill="#fff" fillOpacity={0.6} />
      <Path d="M5.705-2.663L-2.68 5.722l61.341 61.34 8.385-8.384L5.705-2.662z" fill="#fff" fillOpacity={0.74} />
    </G>
    <Rect x={4.5} y={4.5} width={55} height={55} rx={5.96} fill="#DAE9FF" stroke="#DEAD00" />
    <Mask id="prefix__c" x={6} y={6} width={62} height={62}>
      <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#prefix__c)">
      <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#C2AAFF" />
      <Path fill="#AB89FF" d="M55.091-2l32.285 25.869-51.092 60.163L4 58.163z" />
      <Path
        d="M9.509 11.164c-.135-.503-4.43-6.24-2.047-8.487 2.382-2.247 7.483 6.541 7.986 8.856.503 2.314 2.315 7.111-2.684 13.216-5 6.105-4.631 6.742-3.792 8.118.839 1.375 5.94-1.107 8.926-8.487 0 0 1.744-4.059 1.879-7.313"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.32 1.538s4.799 2.113 6.443 6.44c1.61 4.293 2.45 2.013 2.013 0-.436-2.013.302-2.616 1.443-1.241s3.423 6.876 0 17.71"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.334 5.965s-2.45-5.165 0-5.803c2.45-.637 2.114 3.69 4.295 4.797 2.181 1.107 2.013-2.918 5.436-3.757C31.488.397 33.3.967 33.3.967M36.487 2.31s-9.362.838-11.208 5.97c-1.006 2.818 1.477 5.87.907 8.42-.57 2.549-4.933 7.077 3.993 12.444"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.435 9.588s-1.678 2.985.67 4.293c2.383 1.309.873 2.382.235 2.919-.637.57-2.214 2.314-.234 5.803"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M36.489 7.408s-4.363-1.946-5.94 1.442c-1.577 3.354 4.06 2.918 4.362 4.797.302 1.878-4.63 3.622-2.919 7.11 1.678 3.49 7.684 2.315 8.288-2.247.638-4.562-5.57-7.178-2.45-9.928 3.122-2.751 6.377 2.817 6.377 2.817"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M39.676 10.46s5.268 7.312 8.355 2.515c2.181-3.388-4.496-7.01-4.496-7.01"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M38.87 23.743s3.12.503 4.63-3.421c1.51-3.925 2.685-3.355 4.631-3.69 1.946-.302 6.04-2.348 3.49-6.34-2.55-4.025-2.685-4.327-2.685-5.266M35.548 26.829s6.745 3.857 9.16-2.382c2.417-6.239 7.685-4.864 7.685-4.864s3.054.671 2.618 5.67M7.83 18.276s0-7.615 3.256-4.73c3.255 2.885.67 8.554-2.82 9.929-3.489 1.375-6.442 2.75-6.677 5.669-.235 2.918 2.416 2.817 2.819 1.442.403-1.375 1.007-3.421 3.557-3.924M14.71 34.109s6.174-6.307 9.294-6.105c3.121.201 8.188 4.864 7.852 5.736-.302.872-1.107.872-2.315.067-1.208-.805-4.295-3.992-9.798-1.241"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M41.42 31.995s3.557 1.107 5.168-2.315c1.61-3.421 2.886-7.514 5.235-5.904 2.718 1.812-3.356 4.797-1.88 6.273 1.51 1.51 3.558-.94 3.558-.94"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33.87 32.733s1.31 3.556 5 2.919c3.691-.638 5.503-.47 7.986.067 2.484.536.873-2.717 1.611-3.59.739-.871 2.248 1.074 3.926.84 1.678-.236 2.416-1.376 2.92-2.45M41.42 2.308s8.826-1.71 11.007 2.315c2.147 4.025 1.879 11.304 4.664 13.149 2.785 1.845 3.926.436 3.926.436M19.307 34.41s2.886-.47 4.43.57c1.543 1.04 1.51 2.013 3.053.84 1.544-1.175 2.047-.94 2.047-.94"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.448 35.818s5.067-.839 7.047 1.543c2.013 2.382 2.751 6.105 3.926 3.32 1.174-2.783 2.45-5.567 6.174-3.924"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.086 38.301s10.604-1.744 11.912 3.388c1.31 5.132 1.812 12.344 5.504 12.68 0 0 2.584.67 3.389-2.382"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M37.796 41.186s-4.832-4.629-7.986-2.046c-2.383 1.946-.57 7.983-.94 11.606M18.77 40.716s-.235 1.375 1.375 3.354c1.611 2.013 3.625 5.3.504 7.111-3.121 1.812-5.94.772-6.745 3.187-.805 2.415-1.376 5.099-5.235 5.099"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.274 41.656s6.879 4.528 3.422 7.748c-3.657 3.388-8.255-3.186-8.255-3.186"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.502 47.358s-2.617-4.864-5.503-3.254c-2.886 1.61 2.617 6.172 2.013 9.795-.637 3.622-3.12 5.3-6.308 3.857M31.052 44.775s.134-5.099 3.255-2.617c2.953 2.348 5.57 9.158 4.564 10.6-1.007 1.442-2.92 1.174-2.92 1.174M42.729 46.016s-4.43-6.742-2.181-8.017c2.248-1.274 6.476 3.187 8.053 8.185 1.577 4.998 1.074 8.89-1.61 12.076-2.685 3.186-6.477 8.15-4.8 9.593 1.679 1.443 6.04-2.113 8.054-6.373 2.014-4.26 2.55-7.178 2.752-9.124"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M44.608 37.563c.202.134 3.86.67 6.007 4.863 2.114 4.193 2.818 3.556 2.382.738-.436-2.817.671-2.415 1.51-1.51.806.94 3.86 7.414 0 17.846M41.051 53.597s-.503-5.736 2.45-5.501c2.92.235 2.92 7.48.503 8.99-2.45 1.509-7.986 3.421-8.926 6.44-.772 2.482-.067 4.696 1.745 3.69 1.812-1.007.739-4.495 4.631-5.132M33.871 46.217s2.852 6.81-.671 9.158c-3.524 2.348-6.208 3.991-5.772 10.297.201 2.818 3.658 2.55 3.725-3.086.034-3.823 4.43-4.796 4.43-4.796M25.011 60.875s1.107-5.937-4.866-5.668c-6.006.234-4.43 6.54-8.255 8.117-3.825 1.577-6.375-.872-6.375-.872M12.562 43.098S7.932 34.04-.055 41.655M9.441 37.563s-2.65-4.528-9.496 0M6.254 32.162S4.91 34.745.616 34.577M51.755 38.67s-1.778-2.582 0-3.354c1.779-.738 4.128 1.878 4.631 4.495.504 2.616 2.483 3.187 3.624 2.516"
        stroke="#9065FB"
        strokeOpacity={0.21}
        strokeWidth={0.731}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.548 24.078a.369.369 0 100-.738.369.369 0 000 .738zM32.16 24.984a.268.268 0 100-.537.268.268 0 000 .537zM33.669 25.32a.168.168 0 100-.336.168.168 0 000 .336zM20.783 26.125a.37.37 0 100-.738.37.37 0 000 .738zM19.877 27.333a.268.268 0 100-.537.268.268 0 000 .537zM19.139 28.372a.168.168 0 100-.335.168.168 0 000 .335zM19.878 15.759a.37.37 0 100-.738.37.37 0 000 .738zM19.945 14.048a.268.268 0 100-.537.268.268 0 000 .537zM19.978 12.606a.168.168 0 100-.335.168.168 0 000 .335zM6.455 20.859a.268.268 0 100-.537.268.268 0 000 .537zM7.428 19.852a.168.168 0 100-.335.168.168 0 000 .335zM31.823 50.009a.369.369 0 100-.738.369.369 0 000 .738zM31.655 48.297a.268.268 0 100-.537.268.268 0 000 .537zM31.521 46.855a.168.168 0 100-.336.168.168 0 000 .336zM37.294 57.69a.37.37 0 100-.739.37.37 0 000 .739zM39.072 56.448a.268.268 0 100-.537.268.268 0 000 .537zM40.347 55.006a.168.168 0 100-.336.168.168 0 000 .336zM53.233 51.315a.369.369 0 100-.738.369.369 0 000 .738zM53.232 49.203a.268.268 0 100-.537.268.268 0 000 .537zM53.064 47.626a.168.168 0 100-.336.168.168 0 000 .336zM32.394 30.519a.47.47 0 100-.94.47.47 0 000 .94zM34.676 31.391a.369.369 0 100-.738.369.369 0 000 .738zM36.756 31.525a.235.235 0 100-.47.235.235 0 000 .47zM54.541 27.768a.47.47 0 100-.939.47.47 0 000 .94zM11.555 35.818a.47.47 0 100-.94.47.47 0 000 .94zM9.44 35.08a.37.37 0 100-.737.37.37 0 000 .738zM7.394 34.443a.235.235 0 100-.47.235.235 0 000 .47z"
        fill="#9065FB"
        fillOpacity={0.21}
      />
    </G>
  </>
);

const UnlockableSlot = (
  <>
    <Path d="M0 9a9 9 0 019-9h46a9 9 0 019 9v46a9 9 0 01-9 9H9a9 9 0 01-9-9V9z" fill="#B9B9CC" />
    <Rect x={2} y={2} width={62} height={62} rx={8} fill="#fff" />
    <Rect x={2} y={2} width={60} height={60} rx={8} fill="#EFF0FA" />
    <Rect x={2} y={2} width={60} height={60} rx={8} fill="#E9E9F7" />
    <Rect x={4.5} y={4.5} width={55} height={55} rx={5.96} fill="#EFF0FA" stroke="#B9B9CC" />
    <Mask id="prefix__a" x={6} y={6} width={62} height={62}>
      <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#D8D8E9" />
      <Path fill="#C9C9DD" d="M55.092-2l32.284 25.869-51.091 60.163L4 58.163z" />
    </G>
  </>
);

const PlaceholderSlot = (
  <>
    <Path d="M0 9a9 9 0 019-9h46a9 9 0 019 9v46a9 9 0 01-9 9H9a9 9 0 01-9-9V9z" fill="#DEDEF0" />
    <Rect x={2} y={2} width={62} height={62} rx={8} fill="#DEDEF0" />
    <Rect x={2} y={2} width={60} height={60} rx={8} fill="#DEDEF0" />
    <Rect x={2} y={2} width={60} height={60} rx={8} fill="#E9E9F7" />
    <Rect x={4.5} y={4.5} width={55} height={55} rx={5.96} fill="#EFF0FA" stroke="#B9B9CC" />
    <Mask id="prefix__a" x={6} y={6} width={52} height={52}>
      <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#prefix__a)">
      <Rect x={6} y={6} width={52} height={52} rx={4.3} fill="#D8D8E9" />
      <Path fill="#C9C9DD" d="M55.092-2l32.284 25.869-51.091 60.163L4 58.163z" />
    </G>
    <Rect x={2} y={2} width={62} height={62} rx={8} fill="#fff" />
    <Rect x={2} y={2} width={60} height={60} rx={8} fill="#EFF0FA" />
  </>
);

export default Slot;
