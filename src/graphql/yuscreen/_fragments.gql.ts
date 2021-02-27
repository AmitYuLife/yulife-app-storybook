import gql from "graphql-tag";

export const GQL_FRAGMENT_AVATAR_PART = gql`
  fragment YuAvatarPart on AvatarPart {
    partId
    elements {
      name
      attributes {
        name
        value
      }
    }
  }
`;

export const GQL_FRAGMENT_AVATAR_COLOR = gql`
  fragment YuAvatarColor on AvatarColor {
    colorSchemeId
    colorScheme {
      main
      shadow
      light
      base
      eyebrows
      leftEar
      rightEar
      lips
      tongue
      nose
    }
  }
`;

export const GQL_FRAGMENT_AVATAR = gql`
  ${GQL_FRAGMENT_AVATAR_PART}
  ${GQL_FRAGMENT_AVATAR_COLOR}

  fragment YuAvatar on UserAvatar {
    id
    hair {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    facialHair {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    head {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    eyes {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    body {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    pants {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    chest {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    gloves {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    boots {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    glasses {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
  }
`;
