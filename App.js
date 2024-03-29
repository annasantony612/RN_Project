import { View, Text, StyleSheet } from "react-native";
import React, { useMemo, useState } from "react";
import Routes from "./src/Routes";
import { AuthContext } from "./src/Context";
import { openDatabase, enablePromise } from "react-native-sqlite-storage";

// export const getDBConnection = async () => {
//   return openDatabase({name: 'todo-data.db', location: 'default'});
// };

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setUserToken("asdf");
      },
      signUp: () => {
        setUserToken("asdf");
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    // example();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <View style={styles.container}>
        <Routes userToken={userToken} />
      </View>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
