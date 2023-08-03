import { useSelector, useDispatch } from "react-redux";
import {
   
   handleSubstract,
   handleReset,
   handleAdd,
   handleAdd5
} from '../../store/actions/action'

const Counter = () => {
  const count = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const dispatch = useDispatch();
  console.log(count);
  console.log(isLoggedIn);

 

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all --width-500px">
        <button className="--btn --btn-danger" onClick={() => dispatch(authToggle())}>
          {isLoggedIn ? 'Log Out': 'Log In'}
        </button>
        <hr />

        {!isLoggedIn ? (
          <p>Please Log in</p>
        ) : (
          <>
            <h3>React Counter App</h3>
            <h1>{count}</h1>
            <div className="buttons --flex-center">
              <button className=" --btn --btn-danger" onClick={() => dispatch(handleSubstract())}>
                Subtract
              </button>
              <button className=" --btn" onClick={() => dispatch(handleReset())}>
                Reset
              </button>
              <button className=" --btn --btn-primary" onClick={()=>dispatch(handleAdd())}>
                Add
              </button>
              <button
                className=" --btn --btn-primary"
                onClick={() => dispatch(handleAdd5(5))}
              >
                Add 5
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Counter;
