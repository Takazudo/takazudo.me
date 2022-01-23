import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

/**
 * convert
 * "/notes/2022-01-12-hogehoge"
 * into
 * "2022 01 12 Wed"
 */
const parsePublishedDateFromPath = (pagePath) => {
  if (!/^\/?notes\/\d{4}-\d{2}-\d{2}-/.test(pagePath)) {
    return null;
  }
  const matchResult = pagePath.match(/^\/?notes\/(\d+)-(\d+)-(\d+)-.+/);
  const year = matchResult[1];
  const month = matchResult[2];
  const dayOfMonth = matchResult[3];
  const dayjsObj = dayjs(`${year}-${month}-${dayOfMonth}`, "YYYY-MM-DD");
  const dayOfWeekNth = dayjsObj.day();
  const unix = dayjsObj.unix();
  const dayOfWeekEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][
    dayOfWeekNth
  ];
  const formattedDateString = `${year}/${month}/${dayOfMonth} (${dayOfWeekEn})`;
  //console.log(year, month, dayOfMonth, dayOfWeekEn);
  return {
    year,
    month,
    dayOfMonth,
    dayOfWeekEn,
    formattedDateString,
    unix,
  };
};

export { parsePublishedDateFromPath };
