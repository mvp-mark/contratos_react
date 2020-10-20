import currency from "./currency";

export default function formater(total: string ) {
  const formated = new  currency(total, {
      fromCents: true,
    });

    return formated as unknown as Number;
}