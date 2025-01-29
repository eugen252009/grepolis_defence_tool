export type ModelsType = {
    readonly Heroes: Heroes;
    readonly PremiumFeatures: PremiumFeatures;
    readonly PlayerSettings: PlayerSettings;
    readonly PlayerLedger: PlayerLedger;
    readonly PlayerReportStatus: PlayerReportStatus;
    readonly PlayerGods: PlayerGods;
    readonly Quickbar: Quickbar;
    readonly PhoenicianSalesman: PhoenicianSalesman;
    readonly Player: Player;
    readonly PlayerRanking: PlayerRanking;
    readonly PaymentConfig: PaymentConfig;
    readonly InstantBuyData: InstantBuyData;
    readonly Inventory: Inventory;
    readonly MapChunks: MapChunks;
    readonly Mermaid: Mermaid;
    readonly Maintenance: Maintenance;
    readonly PlayerKillpoints: PlayerKillpoints;
    readonly DailyLoginBonus: DailyLoginBonus;
    readonly GrepoScore: GrepoScore;
    readonly PlayerAttackSpot: MapChunks;
    readonly MissionStatus: MapChunks;
    readonly MissionReport: MapChunks;
    readonly TownIdList: TownIDList;
    readonly BuildingBuildData: {
        [key: string]: BuildingBuildDatum;
    };
    readonly Town: {
        [key: string]: Town;
    };
    readonly Units: {
        [key: string]: Unit;
    };
    readonly TownGroupTown: {
        [key: string]: TownGroupTown;
    };
    readonly Midnight: Midnight;
    readonly CastedPowers: {
        [key: string]: CastedPower;
    };
    readonly Researches: {
        [key: string]: Research;
    };
    readonly Buildings: {
        [key: string]: {
            [key: string]: number;
        };
    };
    readonly PlayerHint: {
        [key: string]: PlayerHint;
    };
    readonly Benefit: {
        [key: string]: Benefit;
    };
    readonly PlayerHero: {
        [key: string]: PlayerHero;
    };
    readonly FeatureBlock: FeatureBlock;
    readonly Celebration: {
        [key: string]: Celebration;
    };
    readonly BuildingOrder: {
        [key: string]: BuildingOrder;
    };
    readonly ResearchOrder: ResearchOrder;
    readonly UnitOrder: {
        [key: string]: UnitOrder;
    };
    readonly TownGroup: {
        [key: string]: TownGroup;
    };
    readonly Progressable: Progressable;
    readonly InventoryItem: {
        [key: string]: InventoryItem;
    };
    readonly FarmTown: {
        [key: string]: FarmTown;
    };
    readonly FarmTownPlayerRelation: {
        [key: string]: {
            [key: string]: number | null;
        };
    };
    readonly MapExtraInfo: MapExtraInfo;
    readonly CustomColor: {
        [key: string]: CustomColor;
    };
    readonly Attack: {
        [key: string]: Attack;
    };
    readonly GrepoScoreCategoryHash: {
        [key: string]: GrepoScoreCategoryHash;
    };
    readonly PlayerAward: {
        [key: string]: PlayerAward;
    };
    readonly MovementsUnits: {
        [key: string]: MovementsUnit;
    };
    readonly PlayerCitySkin: PlayerCitySkin;
};
export type Attack = {
    readonly id: number;
    readonly town_id: number;
    readonly incoming: number;
};
export type Benefit = {
    readonly id: number;
    readonly type: string;
    readonly start: number;
    readonly end: number;
    readonly duration: number;
    readonly params: Params;
    readonly changed: null;
    readonly event_id: string;
    readonly large_icon_data?: LargeIconData;
};
export type LargeIconData = {
    readonly css_class: string;
    readonly mouseover_innerHTML: string;
    readonly window_title: string;
    readonly window_type: string;
    readonly tracking_data: TrackingData;
    readonly additional_data: AdditionalData;
};
export type AdditionalData = {
    readonly countdown_start: number;
    readonly countdown_end: number;
};
export type TrackingData = {
    readonly category: string;
    readonly label_part: string;
};
export type Params = {
    readonly type?: string;
    readonly duration?: number;
    readonly skin?: string;
    readonly theme?: string;
};
export type BuildingBuildDatum = {
    readonly id: number;
    readonly player_id: number;
    readonly town_id: number;
    readonly is_building_order_queue_full: boolean;
    readonly building_data: BuildingData;
};
export type BuildingData = {
    readonly main: Academy;
    readonly hide: Academy;
    readonly place: Academy;
    readonly lumber: Academy;
    readonly stoner: Academy;
    readonly ironer: Academy;
    readonly market: Academy;
    readonly docks: Academy;
    readonly barracks: Academy;
    readonly wall: Academy;
    readonly storage: Academy;
    readonly farm: Academy;
    readonly academy: Academy;
    readonly temple: Academy;
    readonly theater: Theater;
    readonly thermal: Thermal;
    readonly library: Library;
    readonly lighthouse: Lighthouse;
    readonly tower: Tower;
    readonly statue: Statue;
    readonly oracle: Oracle;
    readonly trade_office: TradeOffice;
};
export type Academy = {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: number;
    readonly next_level: number;
    readonly tear_down_level: number;
    readonly special: boolean;
    readonly has_max_level: boolean;
    readonly resources_for: CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for: number;
    readonly population_free: number;
    readonly missing_dependencies: any[];
    readonly building_time: string;
    readonly tear_down_time: string;
    readonly group_locked: boolean;
};
export type CancelRefund = {
    readonly wood: number;
    readonly stone: number;
    readonly iron: number;
};
export type Library = {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: LevelEnum | number;
    readonly next_level: number;
    readonly tear_down_level: number;
    readonly special: boolean;
    readonly has_max_level: boolean;
    readonly resources_for: CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for: number;
    readonly population_free: number;
    readonly missing_dependencies: any[] | PurpleMissingDependencies;
    readonly building_time: string;
    readonly tear_down_time: string;
    readonly group_locked: boolean;
};
export declare enum LevelEnum {
    Empty = "-"
}
export type PurpleMissingDependencies = {
    readonly main?: Main;
    readonly academy?: Main;
};
export type Main = {
    readonly needed_level: number;
    readonly name: Name;
};
export declare enum Name {
    Agora = "Agora",
    Akademie = "Akademie",
    Bauernhof = "Bauernhof",
    Hafen = "Hafen",
    Holzfäller = "Holzf\u00E4ller",
    Höhle = "H\u00F6hle",
    Marktplatz = "Marktplatz",
    Senat = "Senat",
    Silbermine = "Silbermine",
    Stadtmauer = "Stadtmauer",
    Tempel = "Tempel"
}
export type Lighthouse = {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: LevelEnum | number;
    readonly next_level: number;
    readonly tear_down_level: number;
    readonly special: boolean;
    readonly has_max_level: boolean;
    readonly resources_for: CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for: number;
    readonly population_free: number;
    readonly missing_dependencies: any[] | FluffyMissingDependencies;
    readonly building_time: string;
    readonly tear_down_time: string;
    readonly group_locked: boolean;
};
export type FluffyMissingDependencies = {
    readonly docks: Main;
    readonly main?: Main;
};
export type Oracle = {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: LevelEnum | number;
    readonly next_level: number;
    readonly tear_down_level: number;
    readonly special: boolean;
    readonly has_max_level: boolean;
    readonly resources_for: CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for: number;
    readonly population_free: number;
    readonly missing_dependencies: any[] | TentacledMissingDependencies;
    readonly building_time: string;
    readonly tear_down_time: string;
    readonly group_locked: boolean;
};
export type TentacledMissingDependencies = {
    readonly hide: Main;
    readonly main?: Main;
};
export type Statue = {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: number;
    readonly next_level: number;
    readonly tear_down_level: number;
    readonly special: boolean;
    readonly has_max_level: boolean;
    readonly resources_for: CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for: number;
    readonly population_free: number;
    readonly missing_dependencies: any[] | StickyMissingDependencies;
    readonly building_time: string;
    readonly tear_down_time: string;
    readonly group_locked: boolean;
};
export type StickyMissingDependencies = {
    readonly temple: Main;
    readonly main?: Main;
};
export type Theater = {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: LevelEnum | number;
    readonly next_level: number;
    readonly tear_down_level: number;
    readonly special: boolean;
    readonly has_max_level: boolean;
    readonly resources_for: CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for: number;
    readonly population_free: number;
    readonly missing_dependencies: any[] | IndigoMissingDependencies;
    readonly building_time: string;
    readonly tear_down_time: string;
    readonly group_locked: boolean;
};
export type IndigoMissingDependencies = {
    readonly ironer?: Main;
    readonly lumber?: Main;
    readonly main?: Main;
};
export type Thermal = {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: LevelEnum | number;
    readonly next_level: number;
    readonly tear_down_level: number;
    readonly special: boolean;
    readonly has_max_level: boolean;
    readonly resources_for: CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for: number;
    readonly population_free: number;
    readonly missing_dependencies: any[] | IndecentMissingDependencies;
    readonly building_time: string;
    readonly tear_down_time: string;
    readonly group_locked: boolean;
};
export type IndecentMissingDependencies = {
    readonly farm?: Main;
    readonly main?: Main;
};
export type Tower = {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: LevelEnum | number;
    readonly next_level: number;
    readonly tear_down_level: number;
    readonly special: boolean;
    readonly has_max_level: boolean;
    readonly resources_for: CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for: number;
    readonly population_free: number;
    readonly missing_dependencies: TowerMissingDependencies;
    readonly building_time: string;
    readonly tear_down_time: string;
    readonly group_locked: boolean;
};
export type TowerMissingDependencies = {
    readonly wall: Main;
    readonly main?: Main;
};
export type TradeOffice = {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: LevelEnum | number;
    readonly next_level: number;
    readonly tear_down_level: number;
    readonly special: boolean;
    readonly has_max_level: boolean;
    readonly resources_for: CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for: number;
    readonly population_free: number;
    readonly missing_dependencies: any[] | HilariousMissingDependencies;
    readonly building_time: string;
    readonly tear_down_time: string;
    readonly group_locked: boolean;
};
export type HilariousMissingDependencies = {
    readonly market?: Main;
    readonly main?: Main;
};
export type BuildingOrder = {
    readonly id: number;
    readonly town_id: number;
    readonly building_type: string;
    readonly to_be_completed_at: number;
    readonly tear_down: boolean;
    readonly created_at: number;
    readonly wood: number;
    readonly stone: number;
    readonly iron: number;
    readonly building_time: number;
    readonly cancel_refund: CancelRefund;
};
export type CastedPower = {
    readonly end_at: number | null;
    readonly power_id: string;
    readonly level: null;
    readonly extended: number;
    readonly town_id: number;
    readonly configuration: CastedPowerConfiguration | null;
    readonly origin_player_id: number;
    readonly id: number;
};
export type CastedPowerConfiguration = {
    readonly amount?: number | string;
    readonly level_increases?: string;
    readonly level_increases_decimals?: number;
    readonly level?: number;
    readonly type?: string;
    readonly lifetime?: number;
    readonly percent?: number | string;
};
export type Celebration = {
    readonly id: number;
    readonly town_id: number;
    readonly celebration_type: string;
    readonly finished_at: number;
};
export type CustomColor = {
    readonly id: number;
    readonly player_id: number;
    readonly other_id: number;
    readonly type: CustomColorType;
    readonly color: string;
    readonly other_name: string;
    readonly player_alliance_id: number;
};
export declare enum CustomColorType {
    Alliance = "alliance",
    Player = "player"
}
export type DailyLoginBonus = {
    readonly "848993142": DailyLoginBonus848993142;
};
export type DailyLoginBonus848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly level: number;
    readonly expires: number;
    readonly open: boolean;
    readonly accepted_at: number;
    readonly reward: The848993142_Reward;
};
export type The848993142_Reward = {
    readonly id: null;
    readonly type: RewardType;
    readonly power_id: string;
    readonly subtype: string;
    readonly configuration: RewardConfiguration;
    readonly level: number;
    readonly stashable: boolean;
};
export type RewardConfiguration = {
    readonly type: string;
    readonly amount?: number;
    readonly lifetime: number;
    readonly level: number;
    readonly percent?: number;
};
export declare enum RewardType {
    PowerRewardEffectInventoryItem = "power_reward_effect_inventory_item"
}
export type FarmTown = {
    readonly id: number;
    readonly name: string;
    readonly island_x: number;
    readonly island_y: number;
    readonly island_xy: number;
    readonly chunks_x: ChunksX;
    readonly chunks_y: ChunksY;
    readonly number_on_island: number;
    readonly resource_offer: ResourceDemand;
    readonly resource_demand: ResourceDemand;
};
export declare enum ChunksX {
    The24 = "{24}",
    The2425 = "{24,25}",
    The25 = "{25}",
    The27 = "{27}",
    The2728 = "{27,28}",
    The28 = "{28}"
}
export declare enum ChunksY {
    The27 = "{27}",
    The2727 = "{27,27}",
    The28 = "{28}",
    The33 = "{33}",
    The34 = "{34}",
    The3434 = "{34,34}"
}
export declare enum ResourceDemand {
    Iron = "iron",
    Stone = "stone",
    Wood = "wood"
}
export type FeatureBlock = {
    readonly "402220": The402220;
};
export type The402220 = {
    readonly id: number;
    readonly feature_type: string;
    readonly player_id: number;
    readonly town_id: number;
    readonly blocked_from: number;
    readonly blocked_until: number;
};
export type GrepoScore = {
    readonly "848993142": GrepoScore848993142;
};
export type GrepoScore848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly total_score: number;
    readonly world_scores: WorldScore[];
};
export type WorldScore = {
    readonly score: number;
    readonly id: string;
    readonly name: string;
    readonly order_index: number;
};
export type GrepoScoreCategoryHash = {
    readonly category: GrepoScoreCategoryHashCategory;
    readonly hash: string;
    readonly id: number;
};
export declare enum GrepoScoreCategoryHashCategory {
    Combat = "combat",
    DailyAwards = "daily_awards",
    EmpireProgression = "empire_progression",
    EndGame = "end_game",
    Event = "event",
    Heroes = "heroes",
    Highscores = "highscores",
    MilitaryPreparation = "military_preparation",
    Unobtainable = "unobtainable"
}
export type Heroes = {
    readonly "848993142": Heroes848993142;
};
export type Heroes848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly player_id: number;
    readonly available_slots: number;
    readonly free_slots: number;
    readonly culture_slots: number;
    readonly culture_points_for_next_slot: number;
    readonly extra_hero_slots: number;
    readonly experience_limits: {
        [key: string]: number;
    };
    readonly travel_time_to_town: number;
    readonly cure_time: number;
    readonly limit_for_halve_cure: number;
    readonly is_first_call: boolean;
};
export type InstantBuyData = {
    readonly "848993142": InstantBuyData848993142;
};
export type InstantBuyData848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly prices: Prices;
};
export type Prices = {
    readonly building: {
        [key: string]: number;
    };
    readonly hero: {
        [key: string]: number;
    };
    readonly research: {
        [key: string]: number;
    };
    readonly unit: {
        [key: string]: number;
    };
};
export type Inventory = {
    readonly "848993142": Inventory848993142;
};
export type Inventory848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly accessible_slots: number;
    readonly total_amount_of_slots: number;
};
export type InventoryItem = {
    readonly properties: Properties;
    readonly type: RewardType;
    readonly id: number;
    readonly count: number;
};
export type Properties = {
    readonly power_id: string;
    readonly configuration: PropertiesConfiguration;
};
export type PropertiesConfiguration = {
    readonly type?: string;
    readonly amount?: number;
    readonly lifetime?: number;
    readonly level?: number;
    readonly percent?: number;
    readonly limit?: Limit;
    readonly progress?: Limit;
};
export type Limit = {
    readonly battlepoints: number;
};
export type Maintenance = {
    readonly "1": The1;
};
export type The1 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly timestamp: number;
    readonly message: string;
};
export type MapChunks = {
    readonly "848993142": MapChunks848993142;
};
export type MapChunks848993142 = {
    readonly id: number;
    readonly persistent: boolean;
};
export type MapExtraInfo = {
    readonly "617424310": The617424310;
};
export type The617424310 = {
    readonly id: number;
    readonly town_id: number;
    readonly finished_at: number;
    readonly start_at: number;
    readonly type: string;
    readonly report_id: number;
};
export type Mermaid = {
    readonly "848993142": Mermaid848993142;
};
export type Mermaid848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly start_date: number;
    readonly end_date: number;
    readonly reward: null;
    readonly visible: boolean;
    readonly max_resources: number;
};
export type Midnight = {
    readonly all_players: AllPlayers;
};
export type AllPlayers = {
    readonly id: string;
    readonly time: number;
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly hour: number;
    readonly minute: number;
    readonly second: number;
};
export type MovementsUnit = {
    readonly id: number;
    readonly player_id: number;
    readonly cancelable_until: null;
    readonly started_at: null;
    readonly arrival_at: number;
    readonly home_town_id: number;
    readonly target_town_id: number;
    readonly town_name: null;
    readonly link: null;
    readonly command_id: number;
    readonly command_name: string;
    readonly type: string;
    readonly arrived_human: string;
    readonly origin_is_attack_spot: boolean;
    readonly destination_is_attack_spot: boolean;
    readonly cap_of_invisibility_effective_until: number;
    readonly town_name_origin: null | string;
    readonly link_origin: string;
    readonly town_name_destination: string;
    readonly link_destination: string;
};
export type PaymentConfig = {
    readonly "848993142": PaymentConfig848993142;
};
export type PaymentConfig848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly buying_enabled: boolean;
    readonly spending_enabled: boolean;
};
export type PhoenicianSalesman = {
    readonly "848993142": PhoenicianSalesman848993142;
};
export type PhoenicianSalesman848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly player_id: number;
    readonly current_town_id: number;
    readonly next_town_id: null;
    readonly arrival_at: number;
};
export type Player = {
    readonly "848993142": Player848993142;
};
export type Player848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly name: string;
    readonly alliance_id: number;
    readonly alliance_name: string;
    readonly alliance_rights: AllianceRights;
    readonly cultural_points: number;
    readonly available_cultural_points: number;
    readonly needed_cultural_points_for_next_step: number;
    readonly cultural_step: number;
    readonly additional_town_count: number;
    readonly player_game_phase: number;
    readonly tutorial_skipped: boolean;
    readonly quests_closed: number;
    readonly domination_artifact_unlocked: boolean;
    readonly olympus_artifact_unlocked: boolean;
    readonly crm_offers_active: boolean;
};
export type AllianceRights = {
    readonly founder: boolean;
    readonly leader: boolean;
    readonly invite: boolean;
    readonly diplomacy: boolean;
    readonly mass_mail: boolean;
    readonly forum_mod: boolean;
    readonly internal_forum: boolean;
    readonly reservationtool_admin: boolean;
    readonly wonder_participation: boolean;
};
export type PlayerAward = {
    readonly id: number;
    readonly award_id: string;
    readonly name: string;
    readonly descriptions: string[] | {
        [key: string]: string;
    };
    readonly order_index: number;
    readonly is_obtainable: boolean;
    readonly is_reoccurring: boolean;
    readonly awarded_at: number;
    readonly has_level: boolean;
    readonly level: number;
    readonly tier: Tier;
    readonly year: number | null;
    readonly category: GrepoScoreCategoryHashCategory;
    readonly subcategory: string;
    readonly owned: boolean;
    readonly awarded_first: boolean;
    readonly event_id: string;
    readonly amount?: number;
    readonly level_requirements?: {
        [key: string]: number;
    };
};
export declare enum Tier {
    M1 = "m1",
    M2 = "m2",
    M3 = "m3",
    S1 = "s1",
    S2 = "s2",
    S3 = "s3",
    S4 = "s4",
    S5 = "s5"
}
export type PlayerCitySkin = {
    readonly high_temple: Default;
    readonly protectress: Default;
    readonly default: Default;
    readonly ten_anniversary: Default;
    readonly world_wonders: Default;
    readonly domination: Default;
    readonly olympus: Default;
};
export type Default = {
    readonly id: string;
    readonly available: boolean;
    readonly selected: boolean;
    readonly world_only: boolean;
};
export type PlayerGods = {
    readonly "848993142": PlayerGods848993142;
};
export type PlayerGods848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly fury: number;
    readonly production_overview: ProductionOverview;
    readonly castable_powers_on_town: string[];
    readonly max_favor: number;
    readonly last_updated_timestamp: number;
    readonly max_fury: number;
    readonly temples_for_gods: TemplesForGods;
    readonly athena_favor: number;
    readonly hades_favor: number;
    readonly hera_favor: number;
    readonly poseidon_favor: number;
    readonly zeus_favor: number;
    readonly artemis_favor: number;
    readonly aphrodite_favor: number;
    readonly ares_favor: number;
};
export type ProductionOverview = {
    readonly zeus: Aphrodite;
    readonly poseidon: Aphrodite;
    readonly hera: Aphrodite;
    readonly athena: Aphrodite;
    readonly hades: Aphrodite;
    readonly artemis: Aphrodite;
    readonly aphrodite: Aphrodite;
    readonly ares: Aphrodite;
};
export type Aphrodite = {
    readonly current: number;
    readonly production: number;
    readonly god: string;
};
export type TemplesForGods = {
    readonly zeus: boolean;
    readonly poseidon: boolean;
    readonly hera: boolean;
    readonly athena: boolean;
    readonly hades: boolean;
    readonly artemis: boolean;
    readonly aphrodite: boolean;
    readonly ares: boolean;
};
export type PlayerHero = {
    readonly id: number;
    readonly player_id: number;
    readonly type: string;
    readonly experience_points: number;
    readonly level: number;
    readonly cured_at: number | null;
    readonly town_arrival_at: number | null;
    readonly assignment_type: AssignmentType;
    readonly home_town_id: number;
    readonly current_units_id: number | null;
    readonly origin_town_id: number;
    readonly origin_town_name: string;
    readonly target_town_name: null;
    readonly origin_town_link: string;
    readonly target_town_link: string;
    readonly player_link: string;
    readonly target_player_link: string;
    readonly is_attacking_attack_spot: string;
};
export declare enum AssignmentType {
    Town = "town"
}
export type PlayerHint = {
    readonly player_id: number;
    readonly hide: boolean;
    readonly type: string;
    readonly is_fake?: boolean;
    readonly is_user_configurable: boolean;
    readonly id: number;
    readonly category: PlayerHintCategory;
};
export declare enum PlayerHintCategory {
    Confirmation = "confirmation",
    Map = "map"
}
export type PlayerKillpoints = {
    readonly "848993142": PlayerKillpoints848993142;
};
export type PlayerKillpoints848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly player_id: number;
    readonly att: number;
    readonly def: number;
    readonly used: number;
};
export type PlayerLedger = {
    readonly "848993142": PlayerLedger848993142;
};
export type PlayerLedger848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly gold: number;
    readonly laurels: number;
    readonly battle_tokens: number;
    readonly coins_of_wisdom: number;
    readonly coins_of_war: number;
    readonly coins_of_both: number;
    readonly grid_battleships: number;
    readonly grid_gods_gifts: number;
    readonly grid_progression: number;
    readonly rota_tyche_coins: number;
};
export type PlayerRanking = {
    readonly "848993142": PlayerRanking848993142;
};
export type PlayerRanking848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly player_id: number;
    readonly rank: number;
    readonly points: number;
};
export type PlayerReportStatus = {
    readonly "848993142": PlayerReportStatus848993142;
};
export type PlayerReportStatus848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly has_new_messages: boolean;
    readonly has_new_reports: boolean;
    readonly has_new_alliance_post: boolean;
    readonly count_new_messages: number;
    readonly count_new_reports: number;
    readonly count_new_alliance_post: number;
    readonly count_new_announcements: number;
    readonly has_new_announcements: boolean;
};
export type PlayerSettings = {
    readonly "848993142": PlayerSettings848993142;
};
export type PlayerSettings848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly player_id: number;
    readonly extend_premium_curator: boolean;
    readonly extend_premium_trader: boolean;
    readonly extend_premium_priest: boolean;
    readonly extend_premium_commander: boolean;
    readonly extend_premium_captain: boolean;
    readonly may_receive_emails: boolean;
    readonly reminder_on_new_report: boolean;
    readonly reminder_on_new_message: boolean;
    readonly reminder_on_build_finished: boolean;
    readonly quickbar_enabled: boolean;
    readonly timezone: string;
    readonly language: string;
    readonly town_group_overview_type: string;
    readonly award_filter: string;
    readonly map_arrow_type: string;
    readonly delayed_report_deletion_until: null;
    readonly windowmgr_max_concurrent: number;
    readonly windowmgr_nav_scale: number;
    readonly use_localstore: boolean;
    readonly build_from_town_index_enabled: boolean;
    readonly gfx_level: number;
    readonly auto_open_townindex: boolean;
    readonly map_arrow_show_always: boolean;
    readonly map_show_supporting_units: boolean;
    readonly map_show_player_in_attackable_point_range: boolean;
    readonly notification_on_build_finished: boolean;
    readonly notification_on_all_build_finished: boolean;
    readonly notification_on_all_recruitment_finished: boolean;
    readonly notification_phoenician_salesman: boolean;
    readonly notification_awards: boolean;
    readonly notification_spy_reports: boolean;
    readonly notification_fight_reports: boolean;
    readonly notification_fight_support: boolean;
    readonly notification_fight_support_own: boolean;
    readonly notification_returning_support: boolean;
    readonly notification_arriving_support: boolean;
    readonly notification_support_from_others: boolean;
    readonly notification_incoming_support: boolean;
    readonly notification_withdraw_support_own: boolean;
    readonly notification_spells_from_others: boolean;
    readonly notification_spells_from_myself: boolean;
    readonly notification_trade_reports: boolean;
    readonly notification_block_invitation: boolean;
    readonly notification_units_in_ghost_town: boolean;
    readonly notification_militia_popup: boolean;
    readonly report_fight_support_own: boolean;
    readonly report_returning_support: boolean;
    readonly report_withdraw_support_own: boolean;
    readonly report_arriving_support: boolean;
    readonly report_support_from_others: boolean;
    readonly report_spells_from_myself: boolean;
    readonly notification_receive_daily_non_winner_messages: boolean;
    readonly report_units_in_ghost_town: boolean;
    readonly show_confirmation_popups: boolean;
    readonly night_gfx: boolean;
    readonly night_gfx_city: boolean;
    readonly center_town_on_map: boolean;
    readonly map_movements: boolean;
    readonly background_music: boolean;
    readonly sound_effects: boolean;
    readonly click_sounds: boolean;
    readonly attack_sound: boolean;
    readonly sound_volume: number;
    readonly click_volume: number;
    readonly background_volume: number;
    readonly effect_volume: number;
    readonly muted: boolean;
    readonly animations_clouds: boolean;
    readonly animations_city: boolean;
    readonly animations_highlights: boolean;
    readonly tutorial_bar: boolean;
    readonly fixed_small_resolution: boolean;
    readonly building_queue_finished_email_sent: boolean;
    readonly pause_attack_notifications_from: null;
    readonly pause_attack_notifications_until: null;
    readonly activate_tutorial_arrow_by_default: boolean;
    readonly show_activities_icon: boolean;
    readonly activate_mobile_ui: boolean;
    readonly show_survey_icon: boolean;
    readonly webnotification_combat_attack_incoming: boolean;
    readonly webnotification_combat_attack_reminder: boolean;
    readonly webnotification_combat_hero_healed: boolean;
    readonly webnotification_communication_report_arrived: boolean;
    readonly webnotification_communication_message_arrived: boolean;
    readonly webnotification_communication_alliance_message_arrived: boolean;
    readonly webnotification_communication_alliance_message_arrived_duration: number;
    readonly webnotification_island_island_quest_satisfied: boolean;
    readonly webnotification_island_island_quest_added: boolean;
    readonly webnotification_resources_storage_full: boolean;
    readonly webnotification_resources_favor_full: boolean;
    readonly webnotification_resources_trade_arrived: boolean;
    readonly webnotification_city_building_upgraded: boolean;
    readonly webnotification_city_building_upgraded_duration: number;
    readonly webnotification_city_barracks_unit_order_done: boolean;
    readonly webnotification_city_barracks_unit_order_done_duration: number;
    readonly webnotification_city_docks_unit_order_done: boolean;
    readonly webnotification_city_docks_unit_order_done_duration: number;
    readonly webnotification_city_research_completed: boolean;
    readonly webnotification_city_research_completed_duration: number;
    readonly webnotification_city_advisor_running_out: boolean;
    readonly webnotifications_in_foreground: boolean;
};
export type PremiumFeatures = {
    readonly "848993142": PremiumFeatures848993142;
};
export type PremiumFeatures848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly player_id: number;
    readonly curator: number;
    readonly trader: number;
    readonly priest: number;
    readonly commander: number;
    readonly captain: number;
    readonly priest_processed_by_daemon: boolean;
    readonly trader_processed_by_daemon: boolean;
    readonly curator_extended_for_points: boolean;
    readonly curator_extended_for_towns: boolean;
};
export type Progressable = {
    readonly "835699": The835699;
};
export type The835699 = {
    readonly read: boolean;
    readonly progress: number[];
    readonly id: number;
    readonly progressable_id: string;
    readonly progressor_id: number;
    readonly state: string;
    readonly steps_shown: boolean;
    readonly configuration: null;
    readonly player_game_phase: number;
    readonly static_data: StaticData;
    readonly dynamic_data: any[];
    readonly is_island_quest: boolean;
    readonly progress_new: ProgressNew;
};
export type ProgressNew = {
    readonly conditions: Condition[];
    readonly state: number[];
};
export type Condition = {
    readonly type: string;
    readonly subtype: string;
    readonly progress: Progress;
};
export type Progress = {
    readonly curr: number;
    readonly max: number;
};
export type StaticData = {
    readonly name: string;
    readonly description: string;
    readonly short_description: string;
    readonly rewards: RewardElement[];
    readonly tasks: Task[];
    readonly questtype: string;
    readonly questline: string;
    readonly side: null;
    readonly challenge_type: null;
    readonly start_events: string[];
    readonly progress_events: string[];
};
export type RewardElement = {
    readonly type: string;
    readonly data: Data;
    readonly stashable: boolean;
};
export type Data = {
    readonly amount: number;
};
export type Task = {
    readonly description: string;
    readonly image_class: ImageClass;
};
export type ImageClass = {
    readonly type: string;
    readonly name: string;
};
export type Quickbar = {
    readonly "848993142": Quickbar848993142;
};
export type Quickbar848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly options: Option[];
};
export type Option = {
    readonly item: Item;
    readonly options: any[];
};
export type Item = {
    readonly id: number;
    readonly name: Name;
    readonly url: string;
    readonly image: string;
};
export type ResearchOrder = {
    readonly "140543": The140543;
};
export type The140543 = {
    readonly id: number;
    readonly town_id: number;
    readonly research_type: string;
    readonly to_be_completed_at: number;
    readonly created_at: number;
    readonly updated_at: number;
    readonly cancel_refund: CancelRefund;
};
export type Research = {
    readonly slinger: boolean;
    readonly archer: boolean;
    readonly hoplite: boolean;
    readonly town_guard: boolean;
    readonly diplomacy: boolean;
    readonly espionage: boolean;
    readonly booty: boolean;
    readonly pottery: boolean;
    readonly rider: boolean;
    readonly architecture: boolean;
    readonly instructor: boolean;
    readonly bireme: boolean;
    readonly building_crane: boolean;
    readonly meteorology: boolean;
    readonly chariot: boolean;
    readonly attack_ship: boolean;
    readonly conscription: boolean;
    readonly shipwright: boolean;
    readonly demolition_ship: boolean;
    readonly catapult: boolean;
    readonly cryptography: boolean;
    readonly democracy: boolean;
    readonly colonize_ship: boolean;
    readonly small_transporter: boolean;
    readonly plow: boolean;
    readonly berth: boolean;
    readonly trireme: boolean;
    readonly phalanx: boolean;
    readonly breach: boolean;
    readonly mathematics: boolean;
    readonly ram: boolean;
    readonly cartography: boolean;
    readonly take_over: boolean;
    readonly stone_storm: boolean;
    readonly temple_looting: boolean;
    readonly divine_selection: boolean;
    readonly combat_experience: boolean;
    readonly strong_wine: boolean;
    readonly set_sail: boolean;
    readonly id: number;
};
export type Town = {
    readonly player_id: number;
    readonly name: string;
    readonly island_x: number;
    readonly island_y: number;
    readonly resources_last_update: number;
    readonly resource_rare: ResourceDemand;
    readonly resource_plenty: ResourceDemand;
    readonly population_extra: number;
    readonly god: string;
    readonly points: number;
    readonly espionage_storage: number;
    readonly id: number;
    readonly available_population: number;
    readonly last_wood: number;
    readonly last_stone: number;
    readonly last_iron: number;
    readonly population: Population;
    readonly max_trade_capacity: number;
    readonly link_fragment: string;
    readonly resources: CancelRefund;
    readonly resources_contraints: ResourcesContraints;
    readonly production: CancelRefund;
    readonly storage: number;
    readonly sea_id: number;
    readonly island_id: number;
    readonly island_type: number;
    readonly abs_x: number;
    readonly abs_y: number;
    readonly on_small_island: boolean;
    readonly available_trade_capacity: number;
    readonly conquest: boolean;
    readonly has_conqueror: boolean;
    readonly wood: number;
    readonly stone: number;
    readonly iron: number;
};
export type Population = {
    readonly max: number;
    readonly blocked: number;
};
export type ResourcesContraints = {
    readonly plenty: ResourceDemand;
    readonly rare: ResourceDemand;
};
export type TownGroup = {
    readonly player_id: number;
    readonly name: string;
    readonly active: boolean | null;
    readonly collapsed: boolean | null;
    readonly id: number;
};
export type TownGroupTown = {
    readonly group_id: number;
    readonly town_id: number;
    readonly id: number;
};
export type TownIDList = {
    readonly "848993142": TownIDList848993142;
};
export type TownIDList848993142 = {
    readonly id: number;
    readonly persistent: boolean;
    readonly town_ids: number[];
};
export type UnitOrder = {
    readonly parts_done: number;
    readonly id: number;
    readonly town_id: number;
    readonly unit_type: string;
    readonly kind: string;
    readonly count: number;
    readonly units_left: number;
    readonly to_be_completed_at: number;
    readonly created_at: number;
    readonly wood: number;
    readonly stone: number;
    readonly iron: number;
    readonly favor: number;
    readonly refund_for_single_unit: RefundForSingleUnit;
    readonly player_id: number;
};
export type RefundForSingleUnit = {
    readonly wood: number;
    readonly stone: number;
    readonly iron: number;
    readonly favor: number;
    readonly pop: number;
};
export type Unit = {
    readonly id: number;
    readonly home_town_id: number;
    readonly current_town_id: number | null;
    readonly sword: number;
    readonly slinger: number;
    readonly archer: number;
    readonly hoplite: number;
    readonly rider: number;
    readonly chariot: number;
    readonly catapult: number;
    readonly minotaur: number;
    readonly manticore: number;
    readonly zyklop: number;
    readonly harpy: number;
    readonly medusa: number;
    readonly centaur: number;
    readonly pegasus: number;
    readonly cerberus: number;
    readonly fury: number;
    readonly griffin: number;
    readonly calydonian_boar: number;
    readonly satyr: number;
    readonly spartoi: number;
    readonly ladon: number;
    readonly godsent: number;
    readonly big_transporter: number;
    readonly bireme: number;
    readonly attack_ship: number;
    readonly demolition_ship: number;
    readonly small_transporter: number;
    readonly trireme: number;
    readonly colonize_ship: number;
    readonly sea_monster: number;
    readonly siren: number;
    readonly militia: number;
    readonly heroes: null;
    readonly current_town_player_name: null | string;
    readonly current_town_player_id: number | null;
    readonly home_town_name: string;
    readonly current_town_name: null | string;
    readonly island_x: number | null;
    readonly island_y: number | null;
    readonly same_island: boolean | null;
    readonly home_town_link: string;
    readonly current_town_link: null | string;
    readonly current_player_link: null | string;
    readonly number_on_island?: number | null;
};
