import { Mail } from "lucide-react";
import Link from "next/link";

const MESSAGES_ARRAY = [
  {
    id: 1,
    title: "Our First Anniversary Together",
    date: "Sept 23, 2024",
    link: "/anniversary/1",
  },
  {
    id: 1,
    title: "Monthsary #13",
    date: "Oct 23, 2024",
    link: "/monthsary/13",
  },
];

export default function FourthSection() {
  return (
    <section className="min-h-[500px] bg-gray-800 w-full p-2 flex justify-center">
      <div className="max-w-lg w-full">
        <h2 className="text-rose-200 text-5xl font-serif text-center">
          Messages
        </h2>
        <div className="flex flex-wrap my-3">
          {MESSAGES_ARRAY.map((message) => (
            <div
              key={message.id}
              className="w-1/2 p-2"
            >
              <div className="flex justify-between items-center flex-col bg-rose-200 rounded-md p-1 h-24">
                <h3 className="text-sm text-center text-rose-800">{message.title}</h3>
                <p className="text-xs font-light text-rose-800">{message.date}</p>
                <Link
                  href={message.link}
                  className="flex items-center justify-center text-xs gap-1 font-light bg-rose-300 rounded-md w-full text-rose-900 hover:bg-rose-400 p-1"
                >
                  <Mail size={12} strokeWidth={1.3} />
                  Read
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
