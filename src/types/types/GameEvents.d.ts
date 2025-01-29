export type GameEventsType = {
    readonly all: string;
    readonly advent: Advent;
    readonly alliance: CollectionTypeAlliance;
    readonly attack: Attack;
    readonly bar: Bar;
    readonly building: CollectionTypeBuilding;
    readonly button: Button;
    readonly celebration: Celebration;
    readonly command: Command;
    readonly community_goals: CommunityGoals;
    readonly daily_login_bonus: AttackSpot;
    readonly document: Document;
    readonly favor: CollectionTypeFavor;
    readonly forum: Forum;
    readonly game: Game;
    readonly god: God;
    readonly hero: Hero;
    readonly halloween: AttackSpot;
    readonly turn_over_tokens: TurnOverTokens;
    readonly easter: Easter;
    readonly campaign: Campaign;
    readonly hercules2014: AttackSpot;
    readonly active_happening: ActiveHappening;
    readonly happenings: Happenings;
    readonly itowns: Itowns;
    readonly main_menu: MainMenu;
    readonly map: Map;
    readonly minimap: Minimap;
    readonly menu: Menu;
    readonly notification: Notification;
    readonly premium: CollectionTypePremium;
    readonly progressable: Progressable;
    readonly quest: CollectionTypeQuest;
    readonly island_quest: IslandQuest;
    readonly sound: Sound;
    readonly town: CollectionTypeTown;
    readonly tutorial: Tutorial;
    readonly unit: Unit;
    readonly ui: UI;
    readonly window: CollectionTypeWindow;
    readonly system: System;
    readonly spawn: Spawn;
    readonly grid_event: GridEvent;
    readonly attack_spot: AttackSpot;
    readonly color_picker: ColorPicker;
    readonly strategic_map_filter: StrategicMapFilter;
    readonly unit_picker: UnitPicker;
    readonly bot_check: BotCheck;
    readonly grcrt: Grcrt;
};
export type ActiveHappening = {
    readonly reward: GrandPrize;
    readonly inventory: GrandPrize;
    readonly grand_prize: GrandPrize;
};
export type GrandPrize = {
    readonly use: string;
    readonly stash: string;
    readonly trash: string;
};
export type Advent = {
    readonly reward: GrandPrize;
    readonly advisors_received: string;
    readonly shard_collected: string;
};
export type CollectionTypeAlliance = {
    readonly leave: string;
    readonly remove: string;
    readonly create: string;
    readonly join: string;
    readonly new_message: string;
};
export type Attack = {
    readonly incoming: string;
    readonly planner_reminder: string;
};
export type AttackSpot = {
    readonly reward: GrandPrize;
};
export type Bar = {
    readonly powers: Powers;
    readonly units: BarUnits;
};
export type Powers = {
    readonly render: string;
};
export type BarUnits = {
    readonly render: string;
    readonly duration: Powers;
};
export type BotCheck = {
    readonly update_started_at_change: string;
};
export type CollectionTypeBuilding = {
    readonly expand: string;
    readonly demolish: string;
    readonly cancel: string;
    readonly city_overview: BuildingCityOverview;
    readonly academy: Academy;
    readonly farm: BuildingFarm;
};
export type Academy = {
    readonly research: AcademyResearch;
};
export type AcademyResearch = {
    readonly buy: string;
    readonly cancel: string;
};
export type BuildingCityOverview = {
    readonly initialized: string;
    readonly destroyed: string;
};
export type BuildingFarm = {
    readonly request_militia: string;
};
export type Button = {
    readonly buy_gold: Menu;
};
export type Menu = {
    readonly click: string;
};
export type Campaign = {
    readonly ranking_evaluation: string;
};
export type Celebration = {
    readonly start: string;
    readonly finish: string;
};
export type ColorPicker = {
    readonly change_color: string;
};
export type Command = {
    readonly send_unit: string;
    readonly build_unit: string;
    readonly cast_power: string;
    readonly cancel: string;
    readonly support: Support;
};
export type Support = {
    readonly send_back: string;
};
export type CommunityGoals = {
    readonly goal_reached: string;
};
export type Document = {
    readonly key_down: string;
    readonly key_up: string;
    readonly key: Key;
    readonly window: DocumentWindow;
};
export type Key = {
    readonly enter: ArrowLeft;
    readonly shift: ArrowLeft;
    readonly esc: ArrowLeft;
    readonly arrow_left: ArrowLeft;
    readonly arrow_right: ArrowLeft;
    readonly space: ArrowLeft;
};
export type ArrowLeft = {
    readonly down: string;
    readonly up: string;
};
export type DocumentWindow = {
    readonly resize: string;
};
export type Easter = {
    readonly reward: GrandPrize;
    readonly crafted: string;
    readonly ranking_evaluation: string;
};
export type CollectionTypeFavor = {
    readonly change: string;
    readonly full: Full;
};
export type Full = {
    readonly all_gods: string;
};
export type Forum = {
    readonly content_set: string;
};
export type Game = {
    readonly start: string;
    readonly night: string;
    readonly load: string;
};
export type God = {
    readonly changed_to: string;
    readonly choose: string;
    readonly change: string;
};
export type Grcrt = {
    readonly settings: Settings;
    readonly radar: Radar;
    readonly powertooltip: string;
    readonly townGroupsList: string;
    readonly construction_queue: string;
};
export type Radar = {
    readonly find_btn: string;
    readonly display_towns: string;
};
export type Settings = {
    readonly load: string;
    readonly save: string;
};
export type GridEvent = {
    readonly close_grand_prize_journey: string;
};
export type Happenings = {
    readonly icon: Icon;
    readonly window: HappeningsWindow;
};
export type Icon = {
    readonly initialize: string;
};
export type HappeningsWindow = {
    readonly opened: string;
};
export type Hero = {
    readonly wounded: string;
    readonly healed: string;
};
export type IslandQuest = {
    readonly add: string;
    readonly satisfied: string;
};
export type Itowns = {
    readonly refetch: Celebration;
    readonly town_groups: TownGroups;
};
export type TownGroups = {
    readonly add: string;
    readonly remove: string;
    readonly set_active_group: string;
};
export type MainMenu = {
    readonly init: string;
    readonly resize: string;
};
export type Map = {
    readonly zoom_in: string;
    readonly zoom_out: string;
    readonly jump: string;
    readonly town: Menu;
    readonly special_town: Menu;
    readonly free_town: Menu;
    readonly farm: Menu;
    readonly invitation_spot: Menu;
    readonly island: Menu;
    readonly context_menu: Menu;
    readonly refresh: Refresh;
};
export type Refresh = {
    readonly all: string;
    readonly towns: string;
};
export type Minimap = {
    readonly mouse_events: MouseEvents;
    readonly refresh: string;
    readonly load_chunks: string;
};
export type MouseEvents = {
    readonly mouse_up: string;
};
export type Notification = {
    readonly push: string;
    readonly del: string;
    readonly del_all: string;
    readonly building_finished: BuildingFinished;
    readonly incoming_attack: string;
    readonly message: BuildingFinished;
    readonly report: BuildingFinished;
    readonly system: BuildingFinished;
    readonly checkstack: Checkstack;
};
export type BuildingFinished = {
    readonly arrive: string;
};
export type Checkstack = {
    readonly spawned: string;
};
export type CollectionTypePremium = {
    readonly overviews_menu: OverviewsMenu;
    readonly adviser: Adviser;
    readonly merchant: Merchant;
    readonly build_time_reduction: string;
    readonly build_cost_reduction: string;
    readonly close_cash_shop: string;
};
export type Adviser = {
    readonly activate: string;
    readonly expire: string;
    readonly expire_soon: string;
};
export type Merchant = {
    readonly immediate_call: string;
    readonly run_out: string;
};
export type OverviewsMenu = {
    readonly toggle_view: string;
};
export type Progressable = {
    readonly remove: string;
    readonly add: string;
};
export type CollectionTypeQuest = {
    readonly add: string;
    readonly close: string;
    readonly change_state: string;
    readonly reduce_build_time_quest_changed: string;
    readonly tutorial_dead_zone_finished: string;
};
export type Sound = {
    readonly init: string;
    readonly enable: Enable;
    readonly volume: Volume;
};
export type Enable = {
    readonly group: string;
};
export type Volume = {
    readonly change: string;
    readonly mute: string;
};
export type Spawn = {
    readonly destroy_city_portal: string;
};
export type StrategicMapFilter = {
    readonly close: Close;
};
export type Close = {
    readonly color_picker: string;
};
export type System = {
    readonly maintenance_started: string;
    readonly maintenance_ended: string;
    readonly midnight_signal: string;
};
export type CollectionTypeTown = {
    readonly power: Power;
    readonly town_switch: string;
    readonly units_beyond: UnitsBeyondClass;
    readonly units: TownUnits;
    readonly resources: Resources;
    readonly population: Population;
    readonly trade: Trade;
    readonly favor: TownFavor;
    readonly research: OrderClass;
    readonly building: TownBuilding;
    readonly commands: Commands;
    readonly hide: UnitsBeyondClass;
};
export type TownBuilding = {
    readonly order: Order;
};
export type Order = {
    readonly start: string;
    readonly done: string;
    readonly count_change: string;
};
export type Commands = {
    readonly update: string;
    readonly bulk_update: string;
};
export type TownFavor = {
    readonly full: string;
};
export type UnitsBeyondClass = {
    readonly change: string;
};
export type Population = {
    readonly limit_reached: string;
    readonly limit_freed: string;
};
export type Power = {
    readonly added: string;
    readonly removed: string;
};
export type OrderClass = {
    readonly done: string;
};
export type Resources = {
    readonly update: string;
    readonly limit_reached: string;
    readonly limit_reached_all: string;
    readonly limit_freed: string;
};
export type Trade = {
    readonly arrived: string;
};
export type TownUnits = {
    readonly change: string;
    readonly barracks: Cks;
    readonly docks: Cks;
};
export type Cks = {
    readonly order: OrderClass;
};
export type TurnOverTokens = {
    readonly shot: string;
    readonly ranking_evaluation: string;
};
export type Tutorial = {
    readonly started: string;
    readonly arrow: Arrow;
};
export type Arrow = {
    readonly next: Menu;
    readonly previous: Menu;
};
export type UI = {
    readonly layout_units: LayoutUnits;
    readonly layout_gods_spells: LayoutGodsSpells;
    readonly layout_construction_queue: LayoutConstructionQueue;
    readonly spells_menu: SpellsMenu;
    readonly layout_mode: LayoutMode;
};
export type LayoutConstructionQueue = {
    readonly construction_mode: ConstructionMode;
};
export type ConstructionMode = {
    readonly activated: string;
    readonly deactivated: string;
};
export type LayoutGodsSpells = {
    readonly rendered: string;
    readonly state_changed: string;
};
export type LayoutMode = {
    readonly city_overview: IslandViewClass;
    readonly strategic_map: IslandViewClass;
    readonly island_view: IslandViewClass;
};
export type IslandViewClass = {
    readonly activate: string;
};
export type LayoutUnits = {
    readonly rendered: string;
};
export type SpellsMenu = {
    readonly request_open: string;
};
export type Unit = {
    readonly order: UnitsBeyondClass;
};
export type UnitPicker = {
    readonly town_switch_rerender: string;
};
export type CollectionTypeWindow = {
    readonly open: string;
    readonly close: string;
    readonly tab: LayoutUnits;
    readonly dialog: LayoutUnits;
    readonly maximize: string;
    readonly minimize: string;
    readonly reload: string;
    readonly town: WindowTown;
    readonly quest: WindowQuest;
    readonly building: BuyGoldClass;
    readonly daily_bonus: DailyBonus;
    readonly townindex: Townindex;
    readonly inventory: Inventory;
    readonly farm: WindowFarm;
    readonly alliance: WindowAlliance;
    readonly premium: WindowPremium;
    readonly island_quest: AttackSpot;
    readonly minimized_windows_area: MinimizedWindowsArea;
};
export type WindowAlliance = {
    readonly invite_friends: string;
};
export type BuyGoldClass = {
    readonly open: string;
};
export type DailyBonus = {
    readonly accept: string;
};
export type WindowFarm = {
    readonly claim_load: string;
    readonly claim_unit: string;
    readonly trade: string;
    readonly send_resources: string;
};
export type Inventory = {
    readonly use: string;
    readonly trash: string;
    readonly item_added: string;
};
export type MinimizedWindowsArea = {
    readonly show: string;
    readonly hide: string;
};
export type WindowPremium = {
    readonly buy_gold: BuyGoldClass;
};
export type WindowQuest = {
    readonly open: string;
    readonly init_icon: string;
};
export type WindowTown = {
    readonly hide: PurpleHide;
};
export type PurpleHide = {
    readonly count_change: string;
};
export type Townindex = {
    readonly building: Menu;
};
