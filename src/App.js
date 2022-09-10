import { DeviceUUID } from "device-uuid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouting from "./Components/Navigation";
import { setDeviceId } from "./store/reducers/user";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const deviceID = new DeviceUUID();
    dispatch(setDeviceId(deviceID.get()));
  }, [dispatch]);
  return <AppRouting />;
}

export default App;
