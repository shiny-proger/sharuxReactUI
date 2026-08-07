import {
  faBookmark,
  faHeart,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";

export function propsButtons(props) {
  let className = "cursor-pointer font-bold whitespace-nowrap";
  switch (props.size) {
    case "1":
      className += " py-1 px-3 text-[clamp(10px,1vw,30px)]";
      break;
    case "2":
      className += " py-3 px-6 text-[clamp(15px,1vw,40px)]";
      break;
    case "3":
      className += " py-5 px-9 text-[clamp(20px,1vw,50px)]";
      break;
    case undefined:
      className += " py-1 px-3 text-[clamp(10px,1vw,30px)]";
      break;
  }

  switch (props.border) {
    case "none":
      break;
    case "small":
      className += " border-1";
      break;
    case "big":
      className += " border-3";
      break;
    case undefined:
      break;
  }

  switch (props.colorVar) {
    case "purple":
      className +=
        " border-indigo-900 hover:border-indigo-600 active:border-indigo-500 text-olive-300 hover:text-olive-200 active:text-olive-100 bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-300";
      break;
    case "black":
      className +=
        " border-gray-900 hover:border-gray-800 active:border-gray-700 text-gray-300 hover:text-gray-200 bg-gray-800 hover:bg-gray-700 active:bg-gray-600";
      break;
    case "white":
      className +=
        " border-gray-600 hover:border-gray-300 active:border-gray-200 text-gray-800 hover:text-gray-700 bg-taupe-200 hover:bg-taupe-100 active:bg-taupe-50";
      break;
    case "blue":
      className +=
        " border-blue-500 hover:border-blue-400 active:border-blue-300 text-blue-600 hover:text-blue-500 bg-blue-200 hover:bg-blue-100 active:bg-blue-50";
      break;
    case "orange":
      className +=
        " border-orange-600 hover:border-orange-500 active:border-orange-300 text-orange-600 hover:text-orange-500 bg-orange-300 hover:bg-orange-200 active:bg-orange-100";
      break;
    case "green":
      className +=
        " border-emerald-700 hover:border-emerald-500 active:border-emerald-300 text-emerald-600 hover:text-emerald-500 bg-emerald-200 hover:bg-emerald-100 active:bg-emerald-50";
      break;
    case "red":
      className +=
        " border-red-500 hover:border-red-400 active:border-red-300 text-red-600 hover:text-red-500 bg-red-300 hover:bg-red-200 active:bg-red-100";
      break;
    case undefined:
      className +=
        " border-gray-900 hover:border-gray-800 active:border-gray-700 text-gray-300 hover:text-gray-200 bg-gray-800 hover:bg-gray-700 active:bg-gray-600";
      break;
  }
  console.log([] + {});
  switch (props.rad) {
    case "full":
      className += " rounded-full";
      break;
    case "halv":
      className += " rounded-xl";
      break;
    case "none":
      className += " rounded-md";
      break;
    case undefined:
      className += " rounded-md";
      break;
  }
  return className;
}

export function icons(icon) {
  let name = "";
  switch (icon) {
    case "save":
      return faBookmark;
    case "like":
      return faHeart;
    case "arrow":
      return faCircleRight;
    case undefined:
      return faCircleRight;
  }
}

//" rounded-full
// "

// export function butText(elem) {
//   const text = elem.value;
//   return text;
// }
