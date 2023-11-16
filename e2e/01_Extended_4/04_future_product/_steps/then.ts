import { COUNTDOWN_UNIT, navigation } from "@navigation";
import moment from "moment";

export const {
  idVisible,
  textVisible,
  idExist,
  wait,
  textVisibleAtIndex
} = navigation.common;

export const amOnNotificationModal = async () => {
  await textVisible("Notifications")()
}

export const notifCentreEmptyStateVisible = async () => {
  await textVisible("You don't have any notifications")()
}

export const onFutureProductScreen = (customer_product_entity:any) => async()=>{
  await textVisible("Your cover will be active soon")()
  await textVisible('You are not currently covered by this policy and any claims will not be honoured.')()

  const targetDate = moment(customer_product_entity.data.start_date.format('YYYY-MM-DD'));
  const currentDate = moment();

  const diffDuration = moment.duration(targetDate.diff(currentDate));
  
  const days = Math.floor(diffDuration.asDays())
  await idVisible(COUNTDOWN_UNIT(days, 'Days'))()

  var hours = diffDuration.hours()
  await idVisible(COUNTDOWN_UNIT(hours, 'Hours'))()

  var minutes = diffDuration.minutes();

  try {
    await idVisible(COUNTDOWN_UNIT(minutes, 'Mins'))()
  } catch {
    await idVisible(COUNTDOWN_UNIT(minutes + 1, 'Mins'))()
  }
  

}
