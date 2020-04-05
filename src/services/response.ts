export default interface IResponse<T> {
  status: number;
  result: T;
}