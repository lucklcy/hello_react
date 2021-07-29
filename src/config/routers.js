import TodoListSimple from "@/pages/TodoListSimple";
import TodoListRedux from "@/pages/TodoListRedux";
import Home from "@/pages/Home";
const routers = [
  { path: "/home", component: Home },
  { path: "/todo/list/simple", component: TodoListSimple },
  { path: "/todo/list/redux", component: TodoListRedux },
];

export default routers;
