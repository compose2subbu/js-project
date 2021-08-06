console.log("hi");
i = 10;
const f1 = () => {
  console.log(i);
  i = 15;
  console.log(i);
};
f1();
const f2 = f1;
i = 20;
f1();
f2();
var i;
