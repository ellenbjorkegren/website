import type { Metadata } from "next";
import respondents from "./respondents.json";
import DashboardClient from "./DashboardClient";
import type { Respondent } from "./types";

export const metadata: Metadata = {
  title: "Survey Results — BEAR",
  robots: { index: false, follow: false },
};

export default function SurveyResultsPage() {
  return <DashboardClient respondents={respondents as Respondent[]} />;
}
