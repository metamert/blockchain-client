import VoteForm from "@/components/voting/vote-form";
import { VotingResultChart } from "@/components/voting/vote-result";
import VoteTimer from "@/components/voting/vote-timer";

export default function Page({ params }: { params: { slug: string } }) {
  const isElectionCompleted = false;
  return (
    <div className="flex flex-1 items-center justify-center flex-col">
      My Post: {params.slug}
      <VoteTimer />
      {isElectionCompleted ? <VotingResultChart /> : <VoteForm />}
    </div>
  );
}
