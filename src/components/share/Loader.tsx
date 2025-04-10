import loader from '../../assets/loading.gif'

const Loader = () => {
  return (
    <div className="flex w-full justify-center items-center h-[500px]"><img src={loader} className="w-20" alt="" /></div>
  );
};

export default Loader;