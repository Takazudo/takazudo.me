import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

/**
 * convert
 * "/notes/2022-01-12-hogehoge"
 * into
 * "2022 01 12 Wed"
 */
const parsePublishedDateFromPath = (path) => {
  const matchResult = path.match(/^\/?notes\/(\d+)-(\d+)-(\d+)-.+/);
  const year = matchResult[1];
  const month = matchResult[2];
  const dayOfMonth = matchResult[3];
  const dayOfWeekNth = dayjs(
    `${year}-${month}-${dayOfMonth}`,
    "YYYY-MM-DD"
  ).day();
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
  };
};

export { parsePublishedDateFromPath };
