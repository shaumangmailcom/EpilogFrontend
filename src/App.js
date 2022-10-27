import { DeviceUUID } from "device-uuid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouting from "./Components/Navigation";
import { setDeviceId } from "./store/reducers/user";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const deviceID = new DeviceUUID();
    dispatch(setDeviceId(deviceID.get()));
  }, [dispatch]);
  return (
    <PersistGate persistor={persistor}>
      <AppRouting />
    </PersistGate>
  );
}

export default App;
