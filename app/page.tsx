"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <button
        className="border border-lime-100 border-1"
        onClick={() => signIn("github")}
      >
        깃허브 로그인
      </button>
      <button
        className="border border-lime-100 border-1"
        onClick={() => signIn("google")}
      >
        구글 로그인
      </button>
    </div>
  );
}
