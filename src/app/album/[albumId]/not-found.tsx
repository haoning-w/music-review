import PageFrame from "@/components/PageFrame";

function albumNotFound() {
  return (
    <PageFrame>
      <p>{"This album doesn't exist."}</p>
    </PageFrame>
  );
}

export default albumNotFound;
