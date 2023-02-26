import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { MarkdownResult } from "../utils";

export const ZaisteReactMarkDown = ({
  children,
}: {
  children: MarkdownResult;
}) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...props }: any) => {
          return <Link href={href ? href : ""} {...props}></Link>;
        },
      }}
    ></MDXRemote>
  );
};
