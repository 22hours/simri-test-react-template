export const getCTALink = (id: number) => {
  switch (id) {
    case 1:
      return `http://mixxo.com/product/project.html?cate_no=1098`;
    case 2:
      return `http://mixxo.com/product/project.html?cate_no=1119`;
    case 3:
      return `http://mixxo.com/product/project.html?cate_no=1120`;
    case 4:
      return `http://mixxo.com/product/project.html?cate_no=1121`;
    default:
      return "";
  }
};
