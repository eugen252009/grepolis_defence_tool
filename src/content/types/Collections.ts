export interface Collections {
    readonly FarmTownPlayerRelation: Array<{ [key: string]: number | null }[]>;
    readonly FarmTown: Array<FarmTown[]>;
    readonly PlayerHero: Array<PlayerHero[]>;
    readonly MapFavorites: Array<any[]>;
    readonly TownGroup: Array<TownGroup[]>;
    readonly TownGroupTown: Array<TownGroupTown[]>;
    readonly Town: Array<Town[]>;
    readonly BuildingBuildData: Array<BuildingBuildDatum[]>;
    readonly Militia: Array<any[]>;
    readonly IslandQuest: Array<IslandQuest[]>;
    readonly Benefit: Array<Benefit[]>;
    readonly PlayerHint: Array<PlayerHint[]>;
    readonly CrmCampaign: Array<any[]>;
    readonly CrmIcon: Array<any[]>;
    readonly Progressable: Array<Progressable[]>;
    readonly FeatureBlock: Array<any[]>;
    readonly InventoryItem: Array<InventoryItem[]>;
    readonly Wonder: Array<any[]>;
    readonly AlliancePact: Array<any[]>;
    readonly RuntimeSimulator: Array<any[]>;
    readonly MapExtraInfo: Array<any[]>;
    readonly CustomColor: Array<CustomColor[]>;
    readonly PlayerAward: Array<PlayerAward[]>;
    readonly Takeover: Array<any[]>;
    readonly Attack: Array<Attack[]>;
    readonly Support: Array<any[]>;
    readonly BundlesAndPackagesPlayerLevel: Array<any[]>;
    readonly GrepoScoreCategoryHash: Array<GrepoScoreCategoryHash[]>;
    readonly IslandQuestPlayerRelation: Array<IslandQuestPlayerRelation[]>;
    readonly Highlight: Array<any[]>;
    readonly CollectedItem: Array<any[]>;
    readonly MovementsRevoltAttacker: Array<any[]>;
    readonly CappedPowersProgress: Array<any[]>;
    readonly CastedAlliancePowers: Array<any[]>;
    readonly PlayerArtifact: Array<any[]>;
    readonly PlayerCitySkin: Array<PlayerCitySkin[]>;
    readonly PlayerTask: Array<any[]>;
    readonly WorldBoost: Array<any[]>;
    readonly Trade: Array<any[]>;
    readonly UnitOrder: Models[];
    readonly CastedPowers: Array<CastedPower[]>;
    readonly Units: Models[];
    readonly BuildingOrder: Array<BuildingOrder[]>;
    readonly ResearchOrder: Array<any[]>;
    readonly Buildings: Array<any[]>;
    readonly Researches: Array<any[]>;
    readonly Celebration: Array<Celebration[]>;
    readonly MovementsSpy: Array<any[]>;
    readonly MovementsUnits: Array<MovementsUnit[]>;
    readonly MovementsRevoltDefender: Array<any[]>;
    readonly MovementsConqueror: Array<any[]>;
    readonly MovementsColonization: Array<any[]>;
    readonly EasterDroppedIngredient: Array<any[]>;
    readonly CampaignDroppedUnits: Array<any[]>;
}

export interface Attack {
    readonly id: number;
    readonly town_id: number;
    readonly incoming: number;
}

export interface Benefit {
    readonly id: number;
    readonly type: string;
    readonly start: number;
    readonly end: number;
    readonly duration: number;
    readonly params: Params;
    readonly changed: null;
    readonly event_id: string;
    readonly large_icon_data?: LargeIconData;
}

export interface LargeIconData {
    readonly css_class: string;
    readonly mouseover_innerHTML: string;
    readonly window_title: string;
    readonly window_type: string;
    readonly tracking_data: TrackingData;
    readonly additional_data: AdditionalData;
}

export interface AdditionalData {
    readonly countdown_start: number;
    readonly countdown_end: number;
}

export interface TrackingData {
    readonly category: string;
    readonly label_part: string;
}

export interface Params {
    readonly type?: string;
    readonly duration?: number;
    readonly skin?: string;
    readonly theme?: string;
}

export interface BuildingBuildDatum {
    readonly id: number;
    readonly player_id: number;
    readonly town_id: number;
    readonly is_building_order_queue_full: boolean;
    readonly building_data: BuildingData;
}

export interface BuildingData {
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
}

export interface Academy {
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
}

export interface CancelRefund {
    readonly wood: number;
    readonly stone: number;
    readonly iron: number;
}

export interface Library {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: number | string;
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
}

export interface PurpleMissingDependencies {
    readonly academy?: Main;
    readonly main?: Main;
}

export interface Main {
    readonly needed_level: number;
    readonly name: Name;
}

export enum Name {
    Akademie = "Akademie",
    Bauernhof = "Bauernhof",
    Hafen = "Hafen",
    Holzfäller = "Holzfäller",
    Höhle = "Höhle",
    Marktplatz = "Marktplatz",
    Senat = "Senat",
    Silbermine = "Silbermine",
    Stadtmauer = "Stadtmauer",
    Tempel = "Tempel",
}

export interface Lighthouse {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: number | string;
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
}

export interface FluffyMissingDependencies {
    readonly docks: Main;
    readonly main?: Main;
}

export interface Oracle {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: number | string;
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
}

export interface TentacledMissingDependencies {
    readonly main?: Main;
    readonly hide: Main;
}

export interface Statue {
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
}

export interface StickyMissingDependencies {
    readonly main: Main;
    readonly temple: Main;
}

export interface Theater {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: number | string;
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
}

export interface IndigoMissingDependencies {
    readonly lumber?: Main;
    readonly ironer?: Main;
    readonly main?: Main;
}

export interface Thermal {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: number | string;
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
}

export interface IndecentMissingDependencies {
    readonly main?: Main;
    readonly farm?: Main;
}

export interface Tower {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: number | string;
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
}

export interface TowerMissingDependencies {
    readonly wall: Main;
    readonly main?: Main;
}

export interface TradeOffice {
    readonly can_upgrade: boolean;
    readonly can_upgrade_reduced: boolean;
    readonly can_tear_down: boolean;
    readonly enough_storage: boolean;
    readonly enough_resources: boolean;
    readonly level: number | string;
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
}

export interface HilariousMissingDependencies {
    readonly main?: Main;
    readonly market?: Main;
}

export interface BuildingOrder {
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
}

export interface CastedPower {
    readonly end_at: null;
    readonly power_id: string;
    readonly level: null;
    readonly extended: number;
    readonly town_id: number;
    readonly configuration: CastedPowerConfiguration;
    readonly origin_player_id: number;
    readonly id: number;
}

export interface CastedPowerConfiguration {
    readonly amount: number | string;
    readonly level_increases?: string;
    readonly level_increases_decimals?: number;
    readonly level?: number;
    readonly type: string;
}

export interface Celebration {
    readonly id: number;
    readonly town_id: number;
    readonly celebration_type: string;
    readonly finished_at: number;
}

export interface CustomColor {
    readonly id: number;
    readonly player_id: number;
    readonly other_id: number;
    readonly type: CustomColorType;
    readonly color: string;
    readonly other_name: string;
    readonly player_alliance_id: number;
}

export enum CustomColorType {
    Alliance = "alliance",
    Player = "player",
}

export interface FarmTown {
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
}

export enum ChunksX {
    The24 = "{24}",
    The2425 = "{24,25}",
    The25 = "{25}",
    The27 = "{27}",
    The2728 = "{27,28}",
    The28 = "{28}",
}

export enum ChunksY {
    The27 = "{27}",
    The2727 = "{27,27}",
    The28 = "{28}",
    The33 = "{33}",
    The34 = "{34}",
    The3434 = "{34,34}",
}

export enum ResourceDemand {
    Iron = "iron",
    Stone = "stone",
    Wood = "wood",
}

export interface GrepoScoreCategoryHash {
    readonly category: GrepoScoreCategoryHashCategory;
    readonly hash: string;
    readonly id: number;
}

export enum GrepoScoreCategoryHashCategory {
    Combat = "combat",
    DailyAwards = "daily_awards",
    EmpireProgression = "empire_progression",
    EndGame = "end_game",
    Event = "event",
    Heroes = "heroes",
    Highscores = "highscores",
    MilitaryPreparation = "military_preparation",
    Unobtainable = "unobtainable",
}

export interface InventoryItem {
    readonly properties: Properties;
    readonly type: InventoryItemType;
    readonly id: number;
    readonly count: number;
}

export interface Properties {
    readonly power_id: string;
    readonly configuration: PropertiesConfiguration;
}

export interface PropertiesConfiguration {
    readonly lifetime?: number;
    readonly percent?: number;
    readonly type?: string;
    readonly limit?: Limit;
    readonly progress?: Limit;
    readonly level?: number;
    readonly amount?: number;
}

export interface Limit {
    readonly battlepoints: number;
}

export enum InventoryItemType {
    PowerRewardEffectInventoryItem = "power_reward_effect_inventory_item",
}

export interface IslandQuest {
    readonly read: boolean;
    readonly configuration: IslandQuestConfiguration;
    readonly progress: IslandQuestProgress;
    readonly id: number;
    readonly progressable_id: string;
    readonly progressor_id: number;
    readonly state: string;
    readonly steps_shown: boolean;
    readonly player_game_phase: number;
    readonly static_data: IslandQuestStaticData;
    readonly dynamic_data: DynamicData;
    readonly is_island_quest: boolean;
}

export interface IslandQuestConfiguration {
    readonly cf: number;
    readonly time_to_wait: number;
    readonly effect: Effect;
    readonly island_x: number;
    readonly island_y: number;
    readonly number_on_island: number;
    readonly island_quest_level: number;
    readonly rewards: ConfigurationReward[];
}

export interface Effect {
    readonly id: string;
    readonly configuration: EffectConfiguration;
}

export interface EffectConfiguration {
    readonly percent: number;
    readonly lifetime: number;
}

export interface ConfigurationReward {
    readonly type: string;
    readonly data: PurpleData;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: RewardConfiguration;
}

export interface RewardConfiguration {
    readonly type?: string;
    readonly amount?: number;
    readonly level?: number;
    readonly currency?: Currency;
    readonly percent?: number;
    readonly lifetime?: number;
}

export interface Currency {
    readonly name: string;
    readonly name_plural: string;
}

export interface PurpleData {
    readonly instant_currency?: number;
    readonly favor_boost?: number;
}

export interface DynamicData {
    readonly absolute_coordinates: AbsoluteCoordinates;
    readonly island_id: number;
    readonly chunks: Chunks;
}

export interface AbsoluteCoordinates {
    readonly abs_x: number;
    readonly abs_y: number;
}

export interface Chunks {
    readonly cx: string[];
    readonly cy: string[];
}

export interface IslandQuestProgress {
    readonly wait_till: number;
    readonly progress: any[];
}

export interface IslandQuestStaticData {
    readonly name: string;
    readonly description: string;
    readonly short_description: string;
    readonly rewards: ConfigurationReward[];
    readonly tasks: Task[];
    readonly questtype: null;
    readonly questline: string;
    readonly side: string;
    readonly challenge_type: string;
    readonly start_events: any[];
    readonly progress_events: string[];
}

export interface Task {
    readonly description: string;
    readonly image_class: ImageClass;
}

export interface ImageClass {
    readonly type: string;
    readonly name: string;
}

export interface IslandQuestPlayerRelation {
    readonly id: number;
    readonly island_x: number;
    readonly island_y: number;
    readonly progressables_id: string;
    readonly accepted_at: number;
    readonly created_at: number;
    readonly finished_at: null;
    readonly last_hit: number;
}

export interface MovementsUnit {
    readonly id: number;
    readonly player_id: number;
    readonly cancelable_until: null;
    readonly started_at: number;
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
    readonly town_name_origin: string;
    readonly link_origin: string;
    readonly town_name_destination: string;
    readonly link_destination: string;
}

export interface PlayerAward {
    readonly id: number;
    readonly award_id: string;
    readonly name: string;
    readonly descriptions: string[] | { [key: string]: string };
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
    readonly level_requirements?: { [key: string]: number };
}

export enum Tier {
    M1 = "m1",
    M2 = "m2",
    M3 = "m3",
    S1 = "s1",
    S2 = "s2",
    S3 = "s3",
    S4 = "s4",
    S5 = "s5",
}

export interface PlayerCitySkin {
    readonly id: string;
    readonly available: boolean;
    readonly selected: boolean;
    readonly world_only: boolean;
}

export interface PlayerHero {
    readonly id: number;
    readonly player_id: number;
    readonly type: string;
    readonly experience_points: number;
    readonly level: number;
    readonly cured_at: null;
    readonly town_arrival_at: null;
    readonly assignment_type: AssignmentType;
    readonly home_town_id: number;
    readonly current_units_id: number;
    readonly origin_town_id: number;
    readonly origin_town_name: string;
    readonly target_town_name: null;
    readonly origin_town_link: string;
    readonly target_town_link: string;
    readonly player_link: string;
    readonly target_player_link: string;
    readonly is_attacking_attack_spot: string;
}

export enum AssignmentType {
    Town = "town",
}

export interface PlayerHint {
    readonly id: number;
    readonly player_id: number;
    readonly type: string;
    readonly hide: boolean;
    readonly is_user_configurable: boolean;
    readonly category: PlayerHintCategory;
    readonly is_fake?: boolean;
}

export enum PlayerHintCategory {
    Confirmation = "confirmation",
    Map = "map",
}

export interface Progressable {
    readonly read: boolean;
    readonly progress: number[];
    readonly id: number;
    readonly progressable_id: string;
    readonly progressor_id: number;
    readonly state: string;
    readonly steps_shown: boolean;
    readonly configuration: null;
    readonly player_game_phase: number;
    readonly static_data: ProgressableStaticData;
    readonly dynamic_data: any[];
    readonly is_island_quest: boolean;
    readonly progress_new: ProgressNew;
}

export interface ProgressNew {
    readonly conditions: Condition[];
    readonly state: number[];
}

export interface Condition {
    readonly type: string;
    readonly subtype: string;
    readonly progress: ConditionProgress;
}

export interface ConditionProgress {
    readonly curr: number;
    readonly max: number;
}

export interface ProgressableStaticData {
    readonly name: string;
    readonly description: string;
    readonly short_description: string;
    readonly rewards: PurpleReward[];
    readonly tasks: Task[];
    readonly questtype: string;
    readonly questline: string;
    readonly side: null;
    readonly challenge_type: null;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface PurpleReward {
    readonly type: string;
    readonly data: FluffyData;
    readonly stashable: boolean;
}

export interface FluffyData {
    readonly amount: number;
}

export interface Town {
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
}

export interface Population {
    readonly max: number;
    readonly blocked: number;
}

export interface ResourcesContraints {
    readonly plenty: ResourceDemand;
    readonly rare: ResourceDemand;
}

export interface TownGroup {
    readonly player_id: number;
    readonly name: string;
    readonly active: boolean | null;
    readonly collapsed: boolean | null;
    readonly id: number;
}

export interface TownGroupTown {
    readonly group_id: number;
    readonly town_id: number;
    readonly id: number;
}
export interface Models {
    models: Array<Army>

    getAllOrders: () => UnitOrder[];
}

export interface Army {
    attributes: {
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
};


export interface UnitOrder {
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

    getCount: () => number;
    getUnitId: () => string;
}

export interface RefundForSingleUnit {
    readonly wood: number;
    readonly stone: number;
    readonly iron: number;
    readonly favor: number;
    readonly pop: number;
}
