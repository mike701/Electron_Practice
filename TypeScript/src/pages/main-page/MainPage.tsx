const MainPage = (): JSX.Element => {
  const pageRoute: number = localStorage.get("pageId").Number();
  switch (pageRoute) {
    case 1:
      return <div>1</div>;
    default:
      return <div>Your dev is a dumbass</div>;
  }
};

export default MainPage;
