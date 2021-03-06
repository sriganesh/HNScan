import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { usePage, useQuery, Spacer } from "@urkellabs/ucl";

// Components
import BlockSummary from "components/block/BlockSummary";
import BlockAdvanced from "components/block/BlockAdvanced";

// Containers
import TransactionList from "containers/TransactionList";

function BlockSkeleton() {
  return (
    <>
      <BlockSummary skeleton />
    </>
  );
}

//@todo move most of this into a component, not in here.
//@todo save preferences on advanced if it's open or closed.
function BlockContainer({ height, page }) {
  const { data: block } = useQuery("/blocks/" + height);

  return (
    <>
      <BlockSummary block={block} />
      <Spacer px={20} />
      <BlockAdvanced block={block} />
      <Spacer px={20} />
      <Suspense fallback={<div>Loading...</div>}>
        <TransactionList
          url={"/block/" + height}
          page={page}
          from={{ height }}
        />
      </Suspense>
    </>
  );
}

export default function Block() {
  const page = usePage();
  const { height } = useParams();
  return (
    <>
      <Suspense fallback={<BlockSkeleton />}>
        <BlockContainer height={height} page={page} />
      </Suspense>
    </>
  );
}
