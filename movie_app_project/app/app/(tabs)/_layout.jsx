import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from "expo-router"
import { icons } from "../../constants/icons"
import bookmark from "../../../app/assets/icons/bookmark.png";
import profile from "../../../app/assets/icons/profile.png";
import home from "../../../app/assets/icons/home.png";




const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};


const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={home} // Use the correct icon here
                color={color}
                name="Home"
                focused={focused}
      />
    ),
  }}
/>

        <Tabs.Screen
          name="wishlist"
          options={{
            title: "Wishlist",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;