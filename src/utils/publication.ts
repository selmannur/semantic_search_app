import { format, parseISO } from "date-fns";


export const parsePublicationDate = (date: string) => format(parseISO(date), "MMMM yyyy");
