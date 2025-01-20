export interface EventData {
    readonly context: string;
    readonly wnd: Wnd;
}

export interface Wnd {
    readonly models: Models;
    readonly collections: Collections;
    readonly typeinforefid: number;
    readonly type: number;
    getJQElement(): Function
}

export interface Collections {
    readonly farm_town_player_relations: { [key: string]: number | null }[];
    readonly farm_towns: FarmTown[];
    readonly player_heroes: PlayerHero[];
    readonly player_map_favorites: any[];
    readonly town_groups: TownGroup[];
    readonly town_group_towns: TownGroupTown[];
    readonly towns: Town[];
    readonly building_build_datas: BuildingBuildData[];
    readonly militias: any[];
    readonly island_quests: IslandQuest[];
    readonly benefits: Benefit[];
    readonly player_hints: PlayerHint[];
    readonly crm_campaigns: any[];
    readonly crm_icons: any[];
    readonly tutorial_quests: TutorialQuest[];
    readonly feature_blocks: any[];
    readonly inventory_items: InventoryItem[];
    readonly finished_wonders: any[];
    readonly alliance_pacts: any[];
    readonly runtimes: any[];
    readonly map_extra_infos: MapExtraInfo[];
    readonly custom_colors: CustomColor[];
    readonly player_awards: PlayerAward[];
    readonly takeovers: any[];
    readonly attacks: Attack[];
    readonly supports: Attack[];
    readonly bundles_and_packages_player_levels: any[];
    readonly grepo_score_hashes: GrepoScoreHash[];
    readonly island_quest_player_relations: IslandQuestPlayerRelation[];
    readonly highlights: any[];
    readonly collected_items: any[];
    readonly movements_revolts_attacker: any[];
    readonly capped_powers_progresses: any[];
    readonly casted_alliance_powers: any[];
    readonly player_artifacts: any[];
    readonly player_city_skins: PlayerCitySkin[];
    readonly player_tasks: any[];
    readonly world_boosts: any[];
    readonly trades: any[];
    readonly unit_orders: any[];
    readonly casted_powers: CastedPower[];
    readonly units: Unit[];
    readonly supporting_units: Unit[];
    readonly building_orders: BuildingOrder[];
    readonly research_orders: any[];
    readonly town_buildings: any[];
    readonly town_researches: any[];
    readonly celebrations: Celebration[];
    readonly movements_spys: any[];
    readonly movements_units: MovementsUnit[];
    readonly movements_revolts_defender: any[];
    readonly movements_conquerors: any[];
    readonly movements_colonizations: any[];
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

export interface BuildingBuildData {
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
}

export enum LevelEnum {
    Empty = "-",
}

export interface PurpleMissingDependencies {
    readonly main?: Main;
    readonly academy?: Main;
}

export interface Main {
    readonly needed_level: number;
    readonly name: Name;
}

export enum Name {
    Agora = "Agora",
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
}

export interface FluffyMissingDependencies {
    readonly main?: Main;
    readonly docks: Main;
}

export interface Oracle {
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
}

export interface IndigoMissingDependencies {
    readonly main?: Main;
    readonly lumber?: Main;
    readonly ironer?: Main;
}

export interface Thermal {
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
}

export interface TowerMissingDependencies {
    readonly main?: Main;
    readonly wall: Main;
}

export interface TradeOffice {
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
    readonly end_at: number;
    readonly power_id: string;
    readonly level: null;
    readonly extended: number;
    readonly town_id: number;
    readonly configuration: CastedPowerConfiguration;
    readonly origin_player_id: number;
    readonly id: number;
}

export interface CastedPowerConfiguration {
    readonly level?: number;
    readonly type?: ResourceDemand;
    readonly percent: number;
    readonly lifetime: number;
}

export enum ResourceDemand {
    Iron = "iron",
    Stone = "stone",
    Wood = "wood",
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
    readonly type: Type;
    readonly color: string;
    readonly other_name: string;
    readonly player_alliance_id: number;
}

export enum Type {
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

export interface GrepoScoreHash {
    readonly category: GrepoScoreHashCategory;
    readonly hash: string;
    readonly id: number;
}

export enum GrepoScoreHashCategory {
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
    readonly type: string;
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
    readonly type: string;
    readonly amount: number;
    readonly level?: number;
    readonly currency?: Currency;
    readonly lifetime?: number;
    readonly cf_on?: string;
}

export interface Currency {
    readonly name: string;
    readonly name_plural: string;
}

export interface PurpleData {
    readonly instant_currency?: number;
    readonly unit_training_boost?: number;
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

export interface MapExtraInfo {
    readonly id: number;
    readonly town_id: number;
    readonly finished_at: number;
    readonly start_at: number;
    readonly type: string;
    readonly report_id: number;
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
    readonly category: GrepoScoreHashCategory;
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

export interface Unit {
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
    readonly number_on_island?: number | null;
    readonly same_island: boolean | null;
    readonly home_town_link: string;
    readonly current_town_link: null | string;
    readonly current_player_link: null | string;
}

export interface TownGroupTown {
    readonly group_id: number;
    readonly town_id: number;
    readonly id: number;
}

export interface TownGroup {
    readonly player_id: number;
    readonly name: string;
    readonly active: boolean | null;
    readonly collapsed: boolean | null;
    readonly id: number;
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

export interface TutorialQuest {
    readonly read: boolean;
    readonly progress: number[];
    readonly id: number;
    readonly progressable_id: string;
    readonly progressor_id: number;
    readonly state: string;
    readonly steps_shown: boolean;
    readonly configuration: null;
    readonly player_game_phase: number;
    readonly static_data: TutorialQuestStaticData;
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

export interface TutorialQuestStaticData {
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

export interface Models {
    readonly heroes: Heroes;
    readonly premium_features: PremiumFeatures;
    readonly player_settings: PlayerSettings;
    readonly player_ledger: PlayerLedger;
    readonly player_report_status: PlayerReportStatus;
    readonly player_gods: PlayerGods;
    readonly quickbar: Quickbar;
    readonly phoenician_salesman: PhoenicianSalesman;
    readonly current_player: CurrentPlayer;
    readonly unit_time_to_arrival: UnitTimeToArrival;
    readonly payment_config: PaymentConfig;
    readonly instant_buy_data: InstantBuyData;
    readonly inventory: Inventory;
    readonly map_chunks: MapChunks;
    readonly mermaid: Mermaid;
    readonly maintenance: Maintenance;
    readonly player_killpoints: PlayerKillpoints;
    readonly daily_login: DailyLogin;
    readonly grepo_score: GrepoScore;
    readonly player_attack_spot: MapChunks;
    readonly mission_status: MapChunks;
    readonly mission_report: MapChunks;
    readonly town_id_list: TownIDList;
}

export interface CurrentPlayer {
    readonly player_model: PlayerModel;
    readonly player_ranking_model: PlayerRankingModel;
}

export interface PlayerModel {
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
}

export interface AllianceRights {
    readonly founder: boolean;
    readonly leader: boolean;
    readonly invite: boolean;
    readonly diplomacy: boolean;
    readonly mass_mail: boolean;
    readonly forum_mod: boolean;
    readonly internal_forum: boolean;
    readonly reservationtool_admin: boolean;
    readonly wonder_participation: boolean;
}

export interface PlayerRankingModel {
    readonly id: number;
    readonly persistent: boolean;
    readonly player_id: number;
    readonly rank: number;
    readonly points: number;
}

export interface DailyLogin {
    readonly id: number;
    readonly persistent: boolean;
    readonly level: number;
    readonly expires: number;
    readonly open: boolean;
    readonly accepted_at: number;
    readonly reward: null;
}

export interface GrepoScore {
    readonly id: number;
    readonly persistent: boolean;
    readonly total_score: number;
    readonly world_scores: WorldScore[];
}

export interface WorldScore {
    readonly score: number;
    readonly id: string;
    readonly name: string;
    readonly order_index: number;
}

export interface Heroes {
    readonly id: number;
    readonly persistent: boolean;
    readonly player_id: number;
    readonly available_slots: number;
    readonly free_slots: number;
    readonly culture_slots: number;
    readonly culture_points_for_next_slot: number;
    readonly extra_hero_slots: number;
    readonly experience_limits: { [key: string]: number };
    readonly travel_time_to_town: number;
    readonly cure_time: number;
    readonly limit_for_halve_cure: number;
    readonly is_first_call: boolean;
}

export interface InstantBuyData {
    readonly id: number;
    readonly persistent: boolean;
    readonly prices: Prices;
}

export interface Prices {
    readonly building: { [key: string]: number };
    readonly hero: { [key: string]: number };
    readonly research: { [key: string]: number };
    readonly unit: { [key: string]: number };
}

export interface Inventory {
    readonly id: number;
    readonly persistent: boolean;
    readonly accessible_slots: number;
    readonly total_amount_of_slots: number;
}

export interface Maintenance {
    readonly id: number;
    readonly persistent: boolean;
    readonly timestamp: number;
    readonly message: string;
}

export interface MapChunks {
    readonly id: number;
    readonly persistent: boolean;
}

export interface Mermaid {
    readonly id: number;
    readonly persistent: boolean;
    readonly start_date: number;
    readonly end_date: number;
    readonly reward: null;
    readonly visible: boolean;
    readonly max_resources: number;
}

export interface PaymentConfig {
    readonly id: number;
    readonly persistent: boolean;
    readonly buying_enabled: boolean;
    readonly spending_enabled: boolean;
}

export interface PhoenicianSalesman {
    readonly id: number;
    readonly persistent: boolean;
    readonly player_id: number;
    readonly current_town_id: null;
    readonly next_town_id: number;
    readonly arrival_at: number;
}

export interface PlayerGods {
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
}

export interface ProductionOverview {
    readonly zeus: Aphrodite;
    readonly poseidon: Aphrodite;
    readonly hera: Aphrodite;
    readonly athena: Aphrodite;
    readonly hades: Aphrodite;
    readonly artemis: Aphrodite;
    readonly aphrodite: Aphrodite;
    readonly ares: Aphrodite;
}

export interface Aphrodite {
    readonly current: number;
    readonly production: number;
    readonly god: string;
}

export interface TemplesForGods {
    readonly zeus: boolean;
    readonly poseidon: boolean;
    readonly hera: boolean;
    readonly athena: boolean;
    readonly hades: boolean;
    readonly artemis: boolean;
    readonly aphrodite: boolean;
    readonly ares: boolean;
}

export interface PlayerKillpoints {
    readonly id: number;
    readonly persistent: boolean;
    readonly player_id: number;
    readonly att: number;
    readonly def: number;
    readonly used: number;
}

export interface PlayerLedger {
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
}

export interface PlayerReportStatus {
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
}

export interface PlayerSettings {
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
}

export interface PremiumFeatures {
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
}

export interface Quickbar {
    readonly id: number;
    readonly persistent: boolean;
    readonly options: Option[];
}

export interface Option {
    readonly item: Item;
    readonly options: any[];
}

export interface Item {
    readonly id: number;
    readonly name: Name;
    readonly url: string;
    readonly image: string;
}

export interface TownIDList {
    readonly id: number;
    readonly persistent: boolean;
    readonly town_ids: number[];
}

export interface UnitTimeToArrival {
    readonly watching: boolean;
    readonly distance: number;
    readonly time_to_arrival: number;
    readonly selected_units: SelectedUnits;
    readonly current_speed: number;
    readonly unit_speeds: { [key: string]: number };
    readonly duration_offset: number;
}

export interface SelectedUnits {
}
