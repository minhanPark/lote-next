"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <button onClick={() => signIn("github")}>깃허브 로그인</button>
    </div>
  );
}
