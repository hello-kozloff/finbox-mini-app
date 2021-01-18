export default interface IDebtSection {
  data: {} | null;
  index: number;
  onChange?: (index: number) => void;
}