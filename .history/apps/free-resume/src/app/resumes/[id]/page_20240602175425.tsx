import { Layout, StoreProvider, TheResume } from '@free-resume/resumecomps';

export default function Page({ params }: { params: { id: string } }) {
  return (
    <StoreProvider>
      <Layout>
        <TheResume />
      </Layout>
    </StoreProvider>
  );
}
