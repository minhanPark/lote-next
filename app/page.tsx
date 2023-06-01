"use client";

import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <button
        className="border border-lime-500 border-1 ml-2"
        onClick={() => signIn("github")}
      >
        깃허브 로그인
      </button>
      <button
        className="border border-lime-500 border-1 ml-2"
        onClick={() => signIn("google")}
      >
        구글 로그인
      </button>
      <button
        className="border border-lime-500 border-1 ml-2"
        onClick={() =>
          signIn("kakao", { callbackUrl: "http://localhost:3000" })
        }
      >
        카카오 로그인
      </button>
      <button
        className="border border-lime-500 border-1 ml-2"
        onClick={() => signIn("naver")}
      >
        네이버 로그인
      </button>
      <button
        className="border border-lime-500 border-1 ml-2"
        onClick={() => signOut()}
      >
        로그아웃
      </button>
    </div>
  );
}
