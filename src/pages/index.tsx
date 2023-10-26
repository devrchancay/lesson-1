import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Header title="Manosos SPA" description="Cosas de StartWars" />
      <div className="container">
        <Menu />
      </div>
    </Layout>
  );
}
