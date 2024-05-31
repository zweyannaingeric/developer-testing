import { data } from "@/app/data";

export function GET() {
  return Response.json(data);
}
