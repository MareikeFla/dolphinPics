export default function Main() {
  return null;
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/january",
      permanent: false,
    },
  };
}
