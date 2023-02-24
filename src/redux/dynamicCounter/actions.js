import { DINCREMENT ,DDECREMENT} from "./actionTypes";
export const increment = (value) =>{
  console.log("actions");
  return {
    type:DINCREMENT,
    payload:value
  };
};

export const decrement = (value) => {
  return {
    type:DDECREMENT,
    payload:value,
  }
}