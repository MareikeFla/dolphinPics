export default function Main() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/january",
      permanent: false,
    },
  };
}
