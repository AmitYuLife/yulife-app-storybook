export type SideEffect<T = undefined> = (args?: T) => void;

declare namespace RewardPartners {
    export interface Reward {
      id: string;
      rewardProviderId: string;
      availability: string;
      progression_level: string;
      reward_sticker?: string;
      loyalty_programme?: string[];
      available_denominations: Array<{
        yuCoin: number;
        value: number;
        stock: number;
      }>;
      card_image_url: string;
      code: string;
      currency_code: string;
      denomination_type: string;
      description: string;
      e_code_usage_type: string;
      expiry_date_policy: string;
      maximum_value: number;
      minimum_value: number;
      name: string;
      redeem_steps: {
        info: string;
        steps: string[];
      };
      terms_and_conditions_url: string;
      uiSettings: {
        logoWidth: number;
        logoHeight: number;
      };
    }
  
    export interface Metadata {
      avios?: {
        firstName: string;
        lastName: string;
        loyaltyProgramme: string;
        accountNumber: string;
      };
    }
  
    export interface Purchase {
      id: string;
      userId: string;
      rewardProviderId: string;
      amount: number;
      code: string;
      currency_code: string;
      pin: string;
      expiry_date: string;
      name: string;
      yuCoinsSpent: number;
      updatedAt?: string;
      createdAt?: string;
      delivery_url?: string;
      status?: string;
      metadata?: Metadata;
    }
  }