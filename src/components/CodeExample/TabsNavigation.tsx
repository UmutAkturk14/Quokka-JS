type TabsNavigationProps<T extends string> = {
  activeTab: T;
  setActiveTab: (t: T) => void;
  tabs: Record<T, unknown>;
};

export const TabsNavigation = <T extends string>({
  activeTab,
  setActiveTab,
  tabs,
}: TabsNavigationProps<T>) => (
  <div className="bg-gray-100 border-b border-gray-200 px-4">
    <div className="flex space-x-4">
      {(Object.keys(tabs) as T[]).map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-medium border-b-3 hover:bg-stone-200 transition ${
            activeTab === tab
              ? "border-amber-500 text-gray-900"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab === "basic" && "Basic Usage"}
          {tab === "advanced" && "API Client"}
          {tab === "integration" && "Functional Utils"}
          {tab === "eventManager" && "Event Manager"}
        </button>
      ))}
    </div>
  </div>
);
