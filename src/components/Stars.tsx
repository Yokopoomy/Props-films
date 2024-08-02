import { v4 } from "uuid";
import Star from "./Star";
import "../App.css";

type Props = {
  count: number;
};

export default function Stars({ count = 0 }: Props) {
  if (count < 1 || count > 5) {
    return;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {[...Array(count)].map(() => (
        <Star key={v4()} />
      ))}
    </ul>
  );
}