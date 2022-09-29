import moment from "moment"
import { isMoment } from "moment";

type BankHoliday = {
    division: string;
    title: string;
    date: string;
    notes: string;
};

type BankHolidaySource = {
    "england-and-wales": {
        division: string;
        events: {
            title: string;
            date: string;
            notes: string;
            bunting: boolean;
        }[];
    };
    scotland: {
        division: string;
        events: {
            title: string;
            date: string;
            notes: string;
            bunting: boolean;
        }[];
    };
    "northern-ireland": {
        division: string;
        events: {
            title: string;
            date: string;
            notes: string;
            bunting: boolean;
        }[];
    };
};

const sourceData: BankHolidaySource = {
    "england-and-wales": {
        division: "england-and-wales",
        events: [
            { title: "New Year’s Day", date: "2017-01-02", notes: "Substitute day", bunting: true },
            { title: "Good Friday", date: "2017-04-14", notes: "", bunting: false },
            { title: "Easter Monday", date: "2017-04-17", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2017-05-01", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2017-05-29", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2017-08-28", notes: "", bunting: true },
            { title: "Christmas Day", date: "2017-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2017-12-26", notes: "", bunting: true },
            { title: "New Year’s Day", date: "2018-01-01", notes: "", bunting: true },
            { title: "Good Friday", date: "2018-03-30", notes: "", bunting: false },
            { title: "Easter Monday", date: "2018-04-02", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2018-05-07", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2018-05-28", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2018-08-27", notes: "", bunting: true },
            { title: "Christmas Day", date: "2018-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2018-12-26", notes: "", bunting: true },
            { title: "New Year’s Day", date: "2019-01-01", notes: "", bunting: true },
            { title: "Good Friday", date: "2019-04-19", notes: "", bunting: false },
            { title: "Easter Monday", date: "2019-04-22", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2019-05-06", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2019-05-27", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2019-08-26", notes: "", bunting: true },
            { title: "Christmas Day", date: "2019-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2019-12-26", notes: "", bunting: true },
            { title: "New Year’s Day", date: "2020-01-01", notes: "", bunting: true },
            { title: "Good Friday", date: "2020-04-10", notes: "", bunting: false },
            { title: "Easter Monday", date: "2020-04-13", notes: "", bunting: false },
            { title: "Early May bank holiday (VE day)", date: "2020-05-08", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2020-05-25", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2020-08-31", notes: "", bunting: true },
            { title: "Christmas Day", date: "2020-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2020-12-28", notes: "Substitute day", bunting: true },
            { title: "New Year’s Day", date: "2021-01-01", notes: "", bunting: true },
            { title: "Good Friday", date: "2021-04-02", notes: "", bunting: false },
            { title: "Easter Monday", date: "2021-04-05", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2021-05-03", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2021-05-31", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2021-08-30", notes: "", bunting: true },
            { title: "Christmas Day", date: "2021-12-27", notes: "Substitute day", bunting: true },
            { title: "Boxing Day", date: "2021-12-28", notes: "Substitute day", bunting: true },
            { title: "New Year’s Day", date: "2022-01-03", notes: "Substitute day", bunting: true },
            { title: "Good Friday", date: "2022-04-15", notes: "", bunting: false },
            { title: "Easter Monday", date: "2022-04-18", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2022-05-02", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2022-06-02", notes: "", bunting: true },
            { title: "Platinum Jubilee bank holiday", date: "2022-06-03", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2022-08-29", notes: "", bunting: true },
            {
                title: "Bank Holiday for the State Funeral of Queen Elizabeth II",
                date: "2022-09-19",
                notes: "",
                bunting: false,
            },
            { title: "Boxing Day", date: "2022-12-26", notes: "", bunting: true },
            { title: "Christmas Day", date: "2022-12-27", notes: "Substitute day", bunting: true },
            { title: "New Year’s Day", date: "2023-01-02", notes: "Substitute day", bunting: true },
            { title: "Good Friday", date: "2023-04-07", notes: "", bunting: false },
            { title: "Easter Monday", date: "2023-04-10", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2023-05-01", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2023-05-29", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2023-08-28", notes: "", bunting: true },
            { title: "Christmas Day", date: "2023-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2023-12-26", notes: "", bunting: true },
        ],
    },
    scotland: {
        division: "scotland",
        events: [
            { title: "2nd January", date: "2017-01-02", notes: "", bunting: true },
            { title: "New Year’s Day", date: "2017-01-03", notes: "Substitute day", bunting: true },
            { title: "Good Friday", date: "2017-04-14", notes: "", bunting: false },
            { title: "Early May bank holiday", date: "2017-05-01", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2017-05-29", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2017-08-07", notes: "", bunting: true },
            { title: "St Andrew’s Day", date: "2017-11-30", notes: "", bunting: true },
            { title: "Christmas Day", date: "2017-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2017-12-26", notes: "", bunting: true },
            { title: "New Year’s Day", date: "2018-01-01", notes: "", bunting: true },
            { title: "2nd January", date: "2018-01-02", notes: "", bunting: true },
            { title: "Good Friday", date: "2018-03-30", notes: "", bunting: false },
            { title: "Early May bank holiday", date: "2018-05-07", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2018-05-28", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2018-08-06", notes: "", bunting: true },
            { title: "St Andrew’s Day", date: "2018-11-30", notes: "", bunting: true },
            { title: "Christmas Day", date: "2018-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2018-12-26", notes: "", bunting: true },
            { title: "New Year’s Day", date: "2019-01-01", notes: "", bunting: true },
            { title: "2nd January", date: "2019-01-02", notes: "", bunting: true },
            { title: "Good Friday", date: "2019-04-19", notes: "", bunting: false },
            { title: "Early May bank holiday", date: "2019-05-06", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2019-05-27", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2019-08-05", notes: "", bunting: true },
            { title: "St Andrew’s Day", date: "2019-12-02", notes: "Substitute day", bunting: true },
            { title: "Christmas Day", date: "2019-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2019-12-26", notes: "", bunting: true },
            { title: "New Year’s Day", date: "2020-01-01", notes: "", bunting: true },
            { title: "2nd January", date: "2020-01-02", notes: "", bunting: true },
            { title: "Good Friday", date: "2020-04-10", notes: "", bunting: false },
            { title: "Early May bank holiday (VE day)", date: "2020-05-08", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2020-05-25", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2020-08-03", notes: "", bunting: true },
            { title: "St Andrew’s Day", date: "2020-11-30", notes: "", bunting: true },
            { title: "Christmas Day", date: "2020-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2020-12-28", notes: "Substitute day", bunting: true },
            { title: "New Year’s Day", date: "2021-01-01", notes: "", bunting: true },
            { title: "2nd January", date: "2021-01-04", notes: "Substitute day", bunting: true },
            { title: "Good Friday", date: "2021-04-02", notes: "", bunting: false },
            { title: "Early May bank holiday", date: "2021-05-03", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2021-05-31", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2021-08-02", notes: "", bunting: true },
            { title: "St Andrew’s Day", date: "2021-11-30", notes: "", bunting: true },
            { title: "Christmas Day", date: "2021-12-27", notes: "Substitute day", bunting: true },
            { title: "Boxing Day", date: "2021-12-28", notes: "Substitute day", bunting: true },
            { title: "New Year’s Day", date: "2022-01-03", notes: "Substitute day", bunting: true },
            { title: "2nd January", date: "2022-01-04", notes: "Substitute day", bunting: true },
            { title: "Good Friday", date: "2022-04-15", notes: "", bunting: false },
            { title: "Early May bank holiday", date: "2022-05-02", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2022-06-02", notes: "", bunting: true },
            { title: "Platinum Jubilee bank holiday", date: "2022-06-03", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2022-08-01", notes: "", bunting: true },
            {
                title: "Bank Holiday for the State Funeral of Queen Elizabeth II",
                date: "2022-09-19",
                notes: "",
                bunting: false,
            },
            { title: "St Andrew’s Day", date: "2022-11-30", notes: "", bunting: true },
            { title: "Boxing Day", date: "2022-12-26", notes: "", bunting: true },
            { title: "Christmas Day", date: "2022-12-27", notes: "Substitute day", bunting: true },
            { title: "New Year’s Day", date: "2023-01-02", notes: "Substitute day", bunting: true },
            { title: "2nd January", date: "2023-01-03", notes: "Substitute day", bunting: true },
            { title: "Good Friday", date: "2023-04-07", notes: "", bunting: false },
            { title: "Early May bank holiday", date: "2023-05-01", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2023-05-29", notes: "", bunting: true },
            { title: "Summer bank holiday", date: "2023-08-07", notes: "", bunting: true },
            { title: "St Andrew’s Day", date: "2023-11-30", notes: "", bunting: true },
            { title: "Christmas Day", date: "2023-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2023-12-26", notes: "", bunting: true },
        ],
    },
    "northern-ireland": {
        division: "northern-ireland",
        events: [
            { title: "New Year’s Day", date: "2017-01-02", notes: "Substitute day", bunting: true },
            { title: "St Patrick’s Day", date: "2017-03-17", notes: "", bunting: true },
            { title: "Good Friday", date: "2017-04-14", notes: "", bunting: false },
            { title: "Easter Monday", date: "2017-04-17", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2017-05-01", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2017-05-29", notes: "", bunting: true },
            { title: "Battle of the Boyne (Orangemen’s Day)", date: "2017-07-12", notes: "", bunting: false },
            { title: "Summer bank holiday", date: "2017-08-28", notes: "", bunting: true },
            { title: "Christmas Day", date: "2017-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2017-12-26", notes: "", bunting: true },
            { title: "New Year’s Day", date: "2018-01-01", notes: "", bunting: true },
            { title: "St Patrick’s Day", date: "2018-03-19", notes: "Substitute day", bunting: true },
            { title: "Good Friday", date: "2018-03-30", notes: "", bunting: false },
            { title: "Easter Monday", date: "2018-04-02", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2018-05-07", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2018-05-28", notes: "", bunting: true },
            { title: "Battle of the Boyne (Orangemen’s Day)", date: "2018-07-12", notes: "", bunting: false },
            { title: "Summer bank holiday", date: "2018-08-27", notes: "", bunting: true },
            { title: "Christmas Day", date: "2018-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2018-12-26", notes: "", bunting: true },
            { title: "New Year’s Day", date: "2019-01-01", notes: "", bunting: true },
            { title: "St Patrick’s Day", date: "2019-03-18", notes: "Substitute day", bunting: true },
            { title: "Good Friday", date: "2019-04-19", notes: "", bunting: false },
            { title: "Easter Monday", date: "2019-04-22", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2019-05-06", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2019-05-27", notes: "", bunting: true },
            { title: "Battle of the Boyne (Orangemen’s Day)", date: "2019-07-12", notes: "", bunting: false },
            { title: "Summer bank holiday", date: "2019-08-26", notes: "", bunting: true },
            { title: "Christmas Day", date: "2019-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2019-12-26", notes: "", bunting: true },
            { title: "New Year’s Day", date: "2020-01-01", notes: "", bunting: true },
            { title: "St Patrick’s Day", date: "2020-03-17", notes: "", bunting: true },
            { title: "Good Friday", date: "2020-04-10", notes: "", bunting: false },
            { title: "Easter Monday", date: "2020-04-13", notes: "", bunting: false },
            { title: "Early May bank holiday (VE day)", date: "2020-05-08", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2020-05-25", notes: "", bunting: true },
            {
                title: "Battle of the Boyne (Orangemen’s Day)",
                date: "2020-07-13",
                notes: "Substitute day",
                bunting: false,
            },
            { title: "Summer bank holiday", date: "2020-08-31", notes: "", bunting: true },
            { title: "Christmas Day", date: "2020-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2020-12-28", notes: "Substitute day", bunting: true },
            { title: "New Year’s Day", date: "2021-01-01", notes: "", bunting: true },
            { title: "St Patrick’s Day", date: "2021-03-17", notes: "", bunting: true },
            { title: "Good Friday", date: "2021-04-02", notes: "", bunting: false },
            { title: "Easter Monday", date: "2021-04-05", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2021-05-03", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2021-05-31", notes: "", bunting: true },
            { title: "Battle of the Boyne (Orangemen’s Day)", date: "2021-07-12", notes: "", bunting: false },
            { title: "Summer bank holiday", date: "2021-08-30", notes: "", bunting: true },
            { title: "Christmas Day", date: "2021-12-27", notes: "Substitute day", bunting: true },
            { title: "Boxing Day", date: "2021-12-28", notes: "Substitute day", bunting: true },
            { title: "New Year’s Day", date: "2022-01-03", notes: "Substitute day", bunting: true },
            { title: "St Patrick’s Day", date: "2022-03-17", notes: "", bunting: true },
            { title: "Good Friday", date: "2022-04-15", notes: "", bunting: false },
            { title: "Easter Monday", date: "2022-04-18", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2022-05-02", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2022-06-02", notes: "", bunting: true },
            { title: "Platinum Jubilee bank holiday", date: "2022-06-03", notes: "", bunting: true },
            { title: "Battle of the Boyne (Orangemen’s Day)", date: "2022-07-12", notes: "", bunting: false },
            { title: "Summer bank holiday", date: "2022-08-29", notes: "", bunting: true },
            {
                title: "Bank Holiday for the State Funeral of Queen Elizabeth II",
                date: "2022-09-19",
                notes: "",
                bunting: false,
            },
            { title: "Boxing Day", date: "2022-12-26", notes: "", bunting: true },
            { title: "Christmas Day", date: "2022-12-27", notes: "Substitute day", bunting: true },
            { title: "New Year’s Day", date: "2023-01-02", notes: "Substitute day", bunting: true },
            { title: "St Patrick’s Day", date: "2023-03-17", notes: "", bunting: true },
            { title: "Good Friday", date: "2023-04-07", notes: "", bunting: false },
            { title: "Easter Monday", date: "2023-04-10", notes: "", bunting: true },
            { title: "Early May bank holiday", date: "2023-05-01", notes: "", bunting: true },
            { title: "Spring bank holiday", date: "2023-05-29", notes: "", bunting: true },
            { title: "Battle of the Boyne (Orangemen’s Day)", date: "2023-07-12", notes: "", bunting: false },
            { title: "Summer bank holiday", date: "2023-08-28", notes: "", bunting: true },
            { title: "Christmas Day", date: "2023-12-25", notes: "", bunting: true },
            { title: "Boxing Day", date: "2023-12-26", notes: "", bunting: true },
        ],
    },
};

// Note this returns all bank holidays for all divisions and does no duplication removal
const getAllBankHolidays = (source?: BankHolidaySource): BankHoliday[] => {
    const data = source || sourceData;

    const englandAndWales: BankHoliday[] = data["england-and-wales"].events.map(x => ({
        division: "england-and-wales",
        title: x.title,
        date: x.date,
        notes: x.notes,
    }));

    const scotland: BankHoliday[] = data["scotland"].events.map(x => ({
        division: "scotland",
        title: x.title,
        date: x.date,
        notes: x.notes,
    }));

    const ni: BankHoliday[] = data["northern-ireland"].events.map(x => ({
        division: "northern-ireland",
        title: x.title,
        date: x.date,
        notes: x.notes,
    }));

    return [...englandAndWales, ...scotland, ...ni];
};

// Accepts either a string in format YYYY-MM-DD or a moment date
const isDayABankHoliday = (date: moment.Moment | string) => {
    const dateString = isMoment(date) ? date.format("YYYY-MM-DD") : date;

    const allBankHolidays = getAllBankHolidays();

    const findDate = allBankHolidays.find(x => x.date === dateString);

    return !!findDate;
};

const isWorkingDay = (date: moment.Moment) => {
    const SUNDAY_DAY_NUMBER = 0;
    const SATURDAY_DAY_NUMBER = 6;
    if (date.day() !== SUNDAY_DAY_NUMBER && date.day() !== SATURDAY_DAY_NUMBER && !isDayABankHoliday(date)) {
        return true;
    }

    return false;
};

    const getNextWorkingDay = (startDate: moment.Moment, daysToAdd: number = 0): moment.Moment => {
    let daysRemaining: number = daysToAdd === 0 ? (!isWorkingDay(startDate) ? 1 : 0) : daysToAdd;

    const newDate = startDate.clone();

    while (daysRemaining > 0) {
        newDate.add(1, "days");
        if (isWorkingDay(newDate)) {
            daysRemaining--;
        }
    }

    return newDate;
    };


export const calculateStartDate = () => {
    // get the date in 5 working days time (including bank holidays) then give us the next day which is the first conceivable start date
    const readyToGoLive = getNextWorkingDay(moment(), 5).add(1, "day");

    const insurerExpectedResponseBy = readyToGoLive.clone().startOf("day");

    const readyToGoLiveDay = readyToGoLive.date();

    // 3 start dates are 1st, 10th, 20th
    if (readyToGoLiveDay > 20) {
        // get first of next month
        readyToGoLive.add(1, "month").set("date", 1);
    } else if (readyToGoLiveDay > 10) {
        readyToGoLive.set("date", 20);
    } else if (readyToGoLiveDay > 1) {
        readyToGoLive.set("date", 10);
    }

    return readyToGoLive.startOf("day").format("DD/MM/YYYY");

};