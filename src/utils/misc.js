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

const tweakImgUrl = (src) => {
  const srcWoQuery = src.replace(/\?.*/, "");
  const srcNarrow = new URL(srcWoQuery);
  const srcWide = new URL(srcWoQuery);
  const srcSquare = new URL(srcWoQuery);
  srcNarrow.searchParams.append("auto", "compress,format");
  srcNarrow.searchParams.append("fit", "clip");
  srcNarrow.searchParams.append("w", "800");
  srcNarrow.searchParams.append("h", "800");
  srcWide.searchParams.append("auto", "compress,format");
  srcWide.searchParams.append("fit", "crop");
  srcWide.searchParams.append("w", "2400");
  srcWide.searchParams.append("h", "800");
  srcSquare.searchParams.append("auto", "compress,format");
  srcSquare.searchParams.append("fit", "clip");
  srcSquare.searchParams.append("w", "800");
  srcSquare.searchParams.append("h", "800");
  return {
    srcNarrow,
    srcWide,
    srcSquare,
  };
};

export { parsePublishedDateFromPath, tweakImgUrl };
