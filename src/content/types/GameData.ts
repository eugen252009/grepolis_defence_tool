export interface GameData {
    readonly units: { [key: string]: UnitValue };
    readonly powers: Powers;
    readonly map_size: number;
    readonly city_overview: CityOverview;
    readonly frontendBridge: FrontendBridge;
    readonly buildings: Buildings;
    readonly godPowersTown: GodPowersTown;
    readonly godPowersCommand: GodPowersCommand;
    readonly inventoryItems: InventoryItems;
    readonly heroes: { [key: string]: Hero };
    readonly progressable: Progressable;
    readonly campaignUnits: { [key: string]: CampaignUnit };
    readonly campaignStages: { [key: string]: CampaignStage };
    readonly campaignMeta: CampaignMeta;
    readonly building: Building;
    readonly island_quests: IslandQuests;
    readonly heroes_meta: { [key: string]: number };
    readonly crafting_meta: CraftingMeta;
    readonly inventory: GameDataInventory;
    readonly research_bonus: { [key: string]: number };
    readonly min_main_level_for_tear_down: number;
    readonly colonization_requirements: ColonizationRequirements;
    readonly resources: ResourceNames;
    readonly resource_names: ResourceNames;
    readonly researches: { [key: string]: Research };
    readonly farm_town_time_values: FarmTownTimeValues;
    readonly farm_town: GameDataFarmTown;
    readonly unit_order_refund_factor: number;
    readonly FarmMouseOverTemplate: string;
    readonly ConfirmDialogTemplate: string;
    readonly dailyBonusStatic: DailyBonusStatic;
    readonly celebration_cost: number;
    readonly additional_runtime_modifier: AdditionalRuntimeModifier;
    readonly godPowersForOtherTowns: GodPowersForOtherTowns;
    readonly cancel_times: CancelTimes;
    readonly events: Events;
    readonly default_flag_colors: DefaultFlagColors;
    readonly gods: Gods;
    readonly artifacts: GameDataArtifacts;
    readonly texts: Texts;
    readonly currencies: Currencies;
}

export interface AdditionalRuntimeModifier {
    readonly default_unit_movement_boost: number;
    readonly lighthouse_speed_bonus: number;
}

export interface GameDataArtifacts {
    readonly storage_modification_for_domination_artifact: number;
}

export interface Building {
    readonly build_cost_reduction_factor: number;
    readonly build_cost_reduction: number;
}

export interface Buildings {
    readonly main: Farm;
    readonly hide: BuildingsHide;
    readonly place: BuildingsPlace;
    readonly lumber: Lumber;
    readonly stoner: Lumber;
    readonly ironer: Ironer;
    readonly market: BuildingsMarket;
    readonly docks: Docks;
    readonly barracks: Barracks;
    readonly wall: Wall;
    readonly storage: BuildingsStorage;
    readonly farm: Farm;
    readonly academy: BuildingsAcademy;
    readonly temple: Temple;
    readonly theater: Theater;
    readonly thermal: Thermal;
    readonly library: Library;
    readonly lighthouse: Library;
    readonly tower: Oracle;
    readonly statue: Oracle;
    readonly oracle: Oracle;
    readonly trade_office: Oracle;
}

export interface BuildingsAcademy {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: AcademyDependencies;
    readonly fixed_building_times: any[];
    readonly level_build_time_factors: any[];
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface AcademyDependencies {
    readonly main: number;
    readonly farm: number;
    readonly barracks: number;
}

export interface Resources {
    readonly wood?: number;
    readonly stone?: number;
    readonly iron?: number;
    readonly amount?: number;
}

export interface Barracks {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: BarracksDependencies;
    readonly fixed_building_times: { [key: string]: number };
    readonly level_build_time_factors: { [key: string]: LevelBuildTimeFactor };
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface BarracksDependencies {
    readonly main: number;
    readonly farm: number;
    readonly ironer: number;
}

export interface LevelBuildTimeFactor {
    readonly level: number;
    readonly factor: number;
}

export interface Docks {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: DocksDependencies;
    readonly fixed_building_times: any[];
    readonly level_build_time_factors: any[];
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface DocksDependencies {
    readonly main: number;
    readonly lumber: number;
    readonly ironer: number;
}

export interface Farm {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: any[];
    readonly fixed_building_times: { [key: string]: number };
    readonly level_build_time_factors: { [key: string]: LevelBuildTimeFactor };
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: { [key: string]: number };
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: number[];
    readonly farm_pow?: number;
    readonly farm_factor?: number;
}

export interface BuildingsHide {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: HideDependencies;
    readonly fixed_building_times: any[];
    readonly level_build_time_factors: any[];
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface HideDependencies {
    readonly main: number;
    readonly storage: number;
    readonly market: number;
}

export interface Ironer {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: IronerDependencies;
    readonly fixed_building_times: { [key: string]: number };
    readonly level_build_time_factors: { [key: string]: LevelBuildTimeFactor };
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface IronerDependencies {
    readonly lumber: number;
}

export interface Library {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: boolean;
    readonly image_levels: number[];
    readonly dependencies: LibraryDependencies;
    readonly fixed_building_times: any[];
    readonly level_build_time_factors: any[];
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface LibraryDependencies {
    readonly main: number;
    readonly academy: number;
    readonly docks: number;
    readonly farm?: number;
}

export interface Lumber {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: any[];
    readonly fixed_building_times: { [key: string]: number };
    readonly level_build_time_factors: { [key: string]: LevelBuildTimeFactor };
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface BuildingsMarket {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: MarketDependencies;
    readonly fixed_building_times: any[];
    readonly level_build_time_factors: any[];
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface MarketDependencies {
    readonly main: number;
    readonly storage: number;
}

export interface Oracle {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: boolean;
    readonly image_levels: number[];
    readonly dependencies: OracleDependencies;
    readonly fixed_building_times: any[];
    readonly level_build_time_factors: any[];
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface OracleDependencies {
    readonly main: number;
    readonly hide?: number;
    readonly market: number;
    readonly temple: number;
    readonly wall?: number;
}

export interface BuildingsPlace {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: boolean;
    readonly image_levels: number[];
    readonly dependencies: any[];
    readonly fixed_building_times: any[];
    readonly level_build_time_factors: any[];
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface BuildingsStorage {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: number;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: any[];
    readonly fixed_building_times: { [key: string]: number };
    readonly level_build_time_factors: { [key: string]: LevelBuildTimeFactor };
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: { [key: string]: number };
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: number[];
    readonly storage_factor: number;
    readonly storage_pow: number;
}

export interface Temple {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: TempleDependencies;
    readonly fixed_building_times: { [key: string]: number };
    readonly level_build_time_factors: { [key: string]: LevelBuildTimeFactor };
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: { [key: string]: number };
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface TempleDependencies {
    readonly stoner: number;
}

export interface Theater {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: boolean;
    readonly image_levels: number[];
    readonly dependencies: TheaterDependencies;
    readonly fixed_building_times: any[];
    readonly level_build_time_factors: any[];
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
}

export interface TheaterDependencies {
    readonly main: number;
    readonly lumber: number;
    readonly ironer: number;
    readonly docks: number;
    readonly academy: number;
}

export interface Thermal {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: boolean;
    readonly image_levels: number[];
    readonly dependencies: LibraryDependencies;
    readonly fixed_building_times: any[];
    readonly level_build_time_factors: any[];
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
    readonly thermal_pow: number;
}

export interface Wall {
    readonly id: string;
    readonly name: string;
    readonly controller: string;
    readonly image: null;
    readonly description: string;
    readonly level: null;
    readonly max_level: number;
    readonly min_level: number;
    readonly requiredBuildings: null;
    readonly coordinates: string;
    readonly resources: Resources;
    readonly pop: number;
    readonly wood_factor: number;
    readonly stone_factor: number;
    readonly iron_factor: number;
    readonly pop_factor: number;
    readonly hide_factor: null;
    readonly points: number;
    readonly points_factor: number;
    readonly build_time: number;
    readonly build_time_factor: number;
    readonly build_time_reduction: number;
    readonly bolt_protected: null;
    readonly image_levels: number[];
    readonly dependencies: WallDependencies;
    readonly fixed_building_times: any[];
    readonly level_build_time_factors: any[];
    readonly special: boolean;
    readonly resourcesFor: null;
    readonly resourcesForLevelFixed: any[];
    readonly resourcesForLevelFactor: any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map: any[];
    readonly catapult_factor: number;
    readonly catapult_power: number;
    readonly def_factor_per_level: number;
}

export interface WallDependencies {
    readonly main: number;
    readonly temple: number;
}

export interface CampaignMeta {
    readonly healer_cooldown: number;
    readonly hero_cooldown: number;
    readonly stage_cooldown: number;
    readonly primary_bonus: number;
    readonly secondary_bonus: number;
    readonly healer_base_cost: number;
    readonly hercules_base_cost: number;
    readonly "max_amount_of_drop_units ": number;
}

export interface CampaignStage {
    readonly id: number;
    readonly name: string;
    readonly previous_stage_ids: { [key: string]: number };
    readonly unit_capacity: number;
    readonly units: Units;
    readonly reward: The0_Class;
    readonly story_id: number | null;
    readonly onetime_rewards?: OnetimeRewards;
}

export interface OnetimeRewards {
    readonly "0": The0_Class;
}

export interface The0_Class {
    readonly type: string;
    readonly subtype: string;
    readonly level: number;
}

export interface Units {
    readonly unit_1?: number;
    readonly unit_2?: number;
    readonly unit_4?: number;
    readonly unit_3?: number;
    readonly unit_5?: number;
}

export interface CampaignUnit {
    readonly type: string;
    readonly name: string;
    readonly fight_value: number;
    readonly bonus1: string;
    readonly bonus2: null | string;
    readonly base_costs: number;
    readonly default_amount: number;
    readonly drop_chance: number;
}

export interface CancelTimes {
    readonly trades: number;
    readonly unit_movements: number;
    readonly espionage: number;
}

export interface CityOverview {
    readonly click_map: ClickMap;
}

export interface ClickMap {
    readonly start_offsets: { [key: string]: StartOffset };
    readonly map_points: MapPoints;
}

export interface MapPoints {
    readonly academy: string;
    readonly barracks: string;
    readonly docks: string;
    readonly farm: string;
    readonly hide: string;
    readonly ironer: string;
    readonly library: string;
    readonly lighthouse: string;
    readonly lumber: string;
    readonly main: string;
    readonly market: string;
    readonly oracle: string;
    readonly statue: string;
    readonly stoner: string;
    readonly storage: string;
    readonly temple: string;
    readonly theater: string;
    readonly thermal: string;
    readonly tower: string;
    readonly trade_office: string;
    readonly trader: string;
    readonly wall: string;
    readonly place: string;
}

export interface StartOffset {
    readonly x: number;
    readonly y: number;
}

export interface ColonizationRequirements {
    readonly docks: number;
    readonly academy: number;
}

export interface CraftingMeta {
    readonly default_cost_factor: number;
    readonly easter: CraftingMetaEaster;
}

export interface CraftingMetaEaster {
    readonly recipe_cost: number;
}

export interface Currencies {
    readonly gold: BattleTokens;
    readonly laurels: BattleTokens;
    readonly battle_tokens: BattleTokens;
    readonly coins_of_wisdom: BattleTokens;
    readonly coins_of_war: BattleTokens;
    readonly coins_of_both: BattleTokens;
    readonly grid_battleships: BattleTokens;
    readonly grid_gods_gifts: BattleTokens;
    readonly grid_progression: BattleTokens;
    readonly rota_tyche_coins: BattleTokens;
}

export interface BattleTokens {
    readonly name: string;
    readonly name_plural: string;
    readonly id: string;
    readonly is_game_player_currency: boolean;
    readonly is_shop_currency: boolean;
}

export interface DailyBonusStatic {
    readonly name: string;
    readonly description: string;
    readonly num_levels: number;
    readonly login_in_a_row_highest: number;
    readonly rewards_list: RewardsList[];
    readonly mystic_rewards: Array<MysticReward[]>;
}

export interface MysticReward {
    readonly id: null;
    readonly type: MysticRewardTypeEnum;
    readonly power_id: string;
    readonly subtype: number | string;
    readonly configuration: MysticRewardConfiguration;
    readonly level: number;
    readonly stashable: boolean;
}

export interface MysticRewardConfiguration {
    readonly type?: string;
    readonly amount?: number;
    readonly lifetime?: number;
    readonly level?: number;
    readonly percent?: number;
    readonly wall_bonus?: number;
    readonly militia_bonus?: number;
    readonly farm_level_cap?: number;
}

export enum MysticRewardTypeEnum {
    PowerRewardEffectInventoryItem = "power_reward_effect_inventory_item",
}

export interface RewardsList {
    readonly resources: number;
    readonly favor: number;
    readonly title: string;
}

export interface DefaultFlagColors {
    readonly lost_town: string;
    readonly current_player: string;
    readonly own_alliance: string;
    readonly default_player: string;
    readonly invite_friend: string;
    readonly enemy: string;
    readonly pact: string;
}

export interface Events {
    readonly assassins: Assassins;
}

export interface Assassins {
    readonly tiers: { [key: string]: Tier };
    readonly premium: Premium;
}

export interface Premium {
    readonly spots_reset_costs: number;
    readonly buy_arrows_costs: number;
    readonly buy_arrows_amount: number;
}

export interface Tier {
    readonly amount: number;
    readonly points: number;
}

export interface GameDataFarmTown {
    readonly building_requirements: BuildingRequirements;
    readonly expansion_times: { [key: string]: number };
    readonly expansion_costs: { [key: string]: number };
    readonly unlock_costs: { [key: string]: number };
    readonly claim_resource_cooldowns_normal: number[];
    readonly claim_resource_cooldowns_booty: number[];
    readonly claim_units: { [key: string]: ClaimUnitCooldowns };
    readonly claim_unit_cooldowns: ClaimUnitCooldowns;
    readonly max_resources_per_day: { [key: string]: number };
}

export interface BuildingRequirements {
    readonly resources: { [key: string]: Resource };
    readonly units: { [key: string]: Resource };
}

export interface Resource {
    readonly building: string;
    readonly level: number;
}

export interface ClaimUnitCooldowns {
    readonly sword: number;
    readonly slinger: number;
    readonly archer: number;
    readonly hoplite: number;
}

export interface FarmTownTimeValues {
    readonly normal: number[];
    readonly booty: number[];
}

export interface FrontendBridge {
    readonly grepolympia: Grepolympia;
    readonly grepolympiashop: Grepolympiashop;
    readonly advent: Advent;
    readonly barracks: Cks;
    readonly docks: Cks;
    readonly dialog: Dialog;
    readonly easter: FrontendBridgeEaster;
    readonly easter_collect: EasterCollect;
    readonly crm_interstitial: CRMInterstitial;
    readonly crm_screen: CRMScreen;
    readonly heroes: Heroes;
    readonly heroes_train: HeroesTrain;
    readonly heroes_welcome: HeroesWelcome;
    readonly hide: FrontendBridgeHide;
    readonly inventory: FrontendBridgeInventory;
    readonly island: CashShop;
    readonly place: FrontendBridgePlace;
    readonly quest: Quest;
    readonly quest_progress: QuestProgress;
    readonly quest_welcome: QuestWelcome;
    readonly senate: Senate;
    readonly hercules2014: Hercules2014;
    readonly hercules2014_collect: Hercules2014Collect;
    readonly storage: FrontendBridgeStorage;
    readonly daily_login: DailyLogin;
    readonly world_wonders_welcome: Welcome;
    readonly phoenician_salesman_welcome: Welcome;
    readonly militia_welcome: Welcome;
    readonly gifts_welcome: GiftsWelcome;
    readonly mobile_tutorial: MobileTutorial;
    readonly world_end_welcome: WorldEndWelcome;
    readonly special_offer: CashShop;
    readonly academy: FrontendBridgeAcademy;
    readonly gold_trade_interstitial: CashShop;
    readonly notes: Notes;
    readonly valentinesday_collect: ValentinesdayCollect;
    readonly update_notification: UpdateNotification;
    readonly farm_town: FrontendBridgeFarmTown;
    readonly attack_spot: AttackSpot;
    readonly attack_spot_victory: AttackSpotVictory;
    readonly grepolis_score: GrepolisScore;
    readonly runtime_info: RuntimeInfo;
    readonly market: FrontendBridgeMarket;
    readonly no_gold_dialog: CashShop;
    readonly community_goal_reached: CashShop;
    readonly turnovertokens: Turnovertokens;
    readonly spawn: Spawn;
    readonly questlog: Questlog;
    readonly strategic_map_filter: StrategicMapFilter;
    readonly color_picker: ColorPicker;
    readonly custom_colors: CustomColors;
    readonly cash_shop: CashShop;
    readonly world_wonder_donations: WorldWonderDonations;
    readonly flippingimages: CashShop;
    readonly colonization: Colonization;
    readonly missions: Missions;
    readonly god_selection: GodSelection;
    readonly domination: Domination;
    readonly notification_popup: DominationEraStarted;
    readonly domination_era_started: DominationEraStarted;
    readonly collected_items: CollectedItems;
    readonly town_overlay: TownOverlay;
    readonly gridevent: Gridevent;
    readonly blackfridaysale: Blackfridaysale;
    readonly olympus_overview: OlympusOverview;
    readonly olympus_temple_info: OlympusTempleInfo;
    readonly olympus_ranking: OlympusRanking;
    readonly rota: Rota;
    readonly world_wonders_info: WorldWondersInfo;
    readonly tasksevent: Tasksevent;
    readonly fakeevent: Fakeevent;
    readonly affront: Affront;
    readonly city_list: CityList;
    readonly recruiting_list: RecruitingList;
    readonly construction_list: ConstructionList;
    readonly activities: Activities;
    readonly eventpass: Eventpass;
    readonly quizevent: Quizevent;
}

export interface FrontendBridgeAcademy {
    readonly research: Rese;
    readonly reset: Rese;
}

export interface Rese {
    readonly templates: ResearchTemplates;
    readonly models: ResearchModels;
    readonly collections: ResearchCollections;
}

export interface ResearchCollections {
    readonly TownBuildings: BuildingOrders;
    readonly TownResearches: BuildingOrders;
    readonly ResearchOrders: BuildingOrders;
    readonly BuildingOrders: BuildingOrders;
    readonly Towns: BuildingOrders;
    readonly PlayerHeroes?: BuildingOrders;
}

export interface BuildingOrders {
    readonly nofetch: boolean;
}

export interface ResearchModels {
    readonly Player: BuildingOrders;
    readonly PlayerLedger: BuildingOrders;
    readonly PremiumFeatures: BuildingOrders;
}

export interface ResearchTemplates {
    readonly index: string;
    readonly techtree: string;
    readonly queue: string;
    readonly queue_instant_buy: string;
    readonly advisor_container: string;
    readonly no_building: string;
}

export interface Activities {
    readonly running_powers: RunningPowers;
    readonly running_temple_powers: RunningTemplePowers;
    readonly movements: Movements;
    readonly temple_commands: TempleCommands;
    readonly trades: Trades;
}

export interface Movements {
    readonly templates: MovementsTemplates;
    readonly models: CollectionsClass;
    readonly collections: { [key: string]: BuildingOrders };
}

export interface CollectionsClass {
}

export interface MovementsTemplates {
    readonly activities_list: string;
    readonly movement: string;
    readonly no_result: string;
}

export interface RunningPowers {
    readonly templates: RunningPowersTemplates;
    readonly models: CollectionsClass;
    readonly collections: { [key: string]: BuildingOrders };
}

export interface RunningPowersTemplates {
    readonly activities_list: string;
    readonly running_power: string;
    readonly no_result: string;
}

export interface RunningTemplePowers {
    readonly templates: RunningTemplePowersTemplates;
    readonly models: CollectionsClass;
    readonly collections: { [key: string]: BuildingOrders };
}

export interface RunningTemplePowersTemplates {
    readonly activities_list: string;
    readonly running_temple_power: string;
    readonly no_result: string;
}

export interface TempleCommands {
    readonly templates: TempleCommandsTemplates;
    readonly models: CollectionsClass;
    readonly collections: { [key: string]: BuildingOrders };
}

export interface TempleCommandsTemplates {
    readonly activities_list: string;
    readonly temple_command: string;
    readonly no_result: string;
}

export interface Trades {
    readonly templates: TradesTemplates;
    readonly models: CollectionsClass;
    readonly collections: { [key: string]: BuildingOrders };
}

export interface TradesTemplates {
    readonly activities_list: string;
    readonly trade: string;
    readonly no_result: string;
}

export interface Advent {
    readonly index: AdventIndex;
}

export interface AdventIndex {
    readonly templates: PurpleTemplates;
    readonly models: PurpleModels;
    readonly collections: PurpleCollections;
}

export interface PurpleCollections {
    readonly AdventSpots: CollectionsClass;
    readonly AdventCostModifiers: CollectionsClass;
}

export interface PurpleModels {
    readonly Advent: CollectionsClass;
    readonly AdventTree: CollectionsClass;
}

export interface PurpleTemplates {
    readonly main: string;
    readonly advisors: string;
    readonly wheel: string;
}

export interface Affront {
    readonly index: AffrontIndex;
}

export interface AffrontIndex {
    readonly templates: FluffyTemplates;
}

export interface FluffyTemplates {
    readonly affront: string;
}

export interface AttackSpot {
    readonly index: AttackSpotIndex;
}

export interface AttackSpotIndex {
    readonly templates: TentacledTemplates;
    readonly models: FluffyModels;
    readonly collections: FluffyCollections;
}

export interface FluffyCollections {
    readonly Units: BuildingOrders;
    readonly Towns: BuildingOrders;
    readonly PlayerHeroes: BuildingOrders;
}

export interface FluffyModels {
    readonly PlayerAttackSpot: BuildingOrders;
    readonly PlayerGods: BuildingOrders;
}

export interface TentacledTemplates {
    readonly index: string;
    readonly unit_picker: string;
}

export interface AttackSpotVictory {
    readonly index: AttackSpotVictoryIndex;
}

export interface AttackSpotVictoryIndex {
    readonly templates: StickyTemplates;
    readonly models: TentacledModels;
    readonly collections: CollectionsClass;
}

export interface TentacledModels {
    readonly PlayerAttackSpot: BuildingOrders;
}

export interface StickyTemplates {
    readonly index: string;
}

export interface Cks {
    readonly index: BarracksIndex;
}

export interface BarracksIndex {
    readonly templates: IndigoTemplates;
    readonly models: StickyModels;
    readonly collections: TentacledCollections;
}

export interface TentacledCollections {
    readonly Benefits: CollectionsClass;
    readonly WorldBoosts: BuildingOrders;
    readonly Towns: BuildingOrders;
    readonly TownResearches: BuildingOrders;
    readonly RemainingUnitOrders: BuildingOrders;
    readonly FeatureBlocks: BuildingOrders;
}

export interface StickyModels {
    readonly PlayerLedger: BuildingOrders;
    readonly PremiumFeatures: BuildingOrders;
    readonly PhoenicianSalesman: CollectionsClass;
}

export interface IndigoTemplates {
    readonly index: string;
    readonly unit_order_box: string;
    readonly unit_details: string;
    readonly orders: string;
    readonly banners: string;
    readonly no_barracks: string;
    readonly units_tabs: string;
}

export interface Blackfridaysale {
    readonly index: BlackfridaysaleIndex;
}

export interface BlackfridaysaleIndex {
    readonly templates: IndecentTemplates;
    readonly models: CollectionsClass;
    readonly collections: CollectionsClass;
}

export interface IndecentTemplates {
    readonly black_friday: string;
}

export interface CashShop {
    readonly index: CashShopIndex;
}

export interface CashShopIndex {
    readonly templates: StickyTemplates;
    readonly models: CollectionsClass;
    readonly collections: CollectionsClass;
}

export interface CityList {
    readonly index: CityListIndex;
}

export interface CityListIndex {
    readonly templates: HilariousTemplates;
    readonly models: CollectionsClass;
    readonly collections: StickyCollections;
}

export interface StickyCollections {
    readonly TownGroups: BuildingOrders;
    readonly TownGroupTowns: BuildingOrders;
    readonly Attacks: BuildingOrders;
    readonly Supports: BuildingOrders;
    readonly IslandQuests: BuildingOrders;
}

export interface HilariousTemplates {
    readonly city_list: string;
    readonly town_group: string;
    readonly city: string;
}

export interface CollectedItems {
    readonly index: CollectedItemsIndex;
}

export interface CollectedItemsIndex {
    readonly templates: AmbitiousTemplates;
    readonly models: CollectionsClass;
    readonly collections: IndigoCollections;
}

export interface IndigoCollections {
    readonly CollectedItems: BuildingOrders;
}

export interface AmbitiousTemplates {
    readonly collected_items: string;
}

export interface Colonization {
    readonly index: ColonizationIndex;
}

export interface ColonizationIndex {
    readonly templates: CunningTemplates;
    readonly models: IndigoModels;
    readonly collections: FluffyCollections;
}

export interface IndigoModels {
    readonly Colonization: CollectionsClass;
    readonly PlayerGods: BuildingOrders;
}

export interface CunningTemplates {
    readonly index: string;
    readonly unit_picker: string;
    readonly tooltip_colonizing_info: string;
    readonly tooltip_island_info: string;
    readonly requirements: string;
}

export interface ColorPicker {
    readonly index: ColorPickerIndex;
}

export interface ColorPickerIndex {
    readonly templates: StickyTemplates;
    readonly models: CollectionsClass;
    readonly collections: IndecentCollections;
}

export interface IndecentCollections {
    readonly CustomColors: BuildingOrders;
}

export interface ConstructionList {
    readonly index: ConstructionListIndex;
}

export interface ConstructionListIndex {
    readonly templates: MagentaTemplates;
    readonly models: IndecentModels;
    readonly collections: HilariousCollections;
}

export interface HilariousCollections {
    readonly BuildingOrders: BuildingOrders;
    readonly FeatureBlocks: BuildingOrders;
    readonly Towns: BuildingOrders;
}

export interface IndecentModels {
    readonly PremiumFeatures: BuildingOrders;
}

export interface MagentaTemplates {
    readonly construction_list: string;
    readonly construction_order_entry: string;
    readonly construction_order_empty: string;
}

export interface CRMInterstitial {
    readonly index: CRMInterstitialIndex;
}

export interface CRMInterstitialIndex {
    readonly templates: FriskyTemplates;
    readonly models: CollectionsClass;
    readonly collections: CollectionsClass;
}

export interface FriskyTemplates {
    readonly crm_index: string;
}

export interface CRMScreen {
    readonly index: CRMScreenIndex;
}

export interface CRMScreenIndex {
    readonly templates: MischievousTemplates;
    readonly models: CollectionsClass;
    readonly collections: CollectionsClass;
}

export interface MischievousTemplates {
    readonly screen_content: string;
}

export interface CustomColors {
    readonly index: CustomColorsIndex;
}

export interface CustomColorsIndex {
    readonly templates: BraggadociousTemplates;
    readonly models: HilariousModels;
    readonly collections: IndecentCollections;
}

export interface HilariousModels {
    readonly Player: BuildingOrders;
}

export interface BraggadociousTemplates {
    readonly index: string;
    readonly item: string;
}

export interface DailyLogin {
    readonly index: DailyLoginIndex;
}

export interface DailyLoginIndex {
    readonly templates: Templates1;
    readonly models: AmbitiousModels;
    readonly collections: CollectionsClass;
}

export interface AmbitiousModels {
    readonly DailyLoginBonus: CollectionsClass;
}

export interface Templates1 {
    readonly index: string;
    readonly reward_favor: string;
    readonly reward_resources: string;
    readonly mystery_box: string;
    readonly daily_login_days_tooltip: string;
    readonly daily_login_goblet_tooltip: string;
}

export interface Dialog {
    readonly info_all_towns_in_one_group: Info;
    readonly info_attack_planner_help: InfoAttackPlannerHelp;
    readonly info_create_first_town_group: Info;
    readonly info_mass_recruit_help: Info;
    readonly info_phoenician_salesman_help: Info;
    readonly info_cap_of_invisibility_not_possible_help: Info;
    readonly go_to_page_default: GoToPageDefault;
    readonly save_coordinates_default: SaveCoordinatesDefault;
    readonly interstitial_default: InterstitialDefault;
    readonly confirmation_window_default: ConfirmationWindowDefault;
    readonly not_enough_gold_window_default: NotEnoughGoldWindowDefault;
    readonly not_enough_gold_window_building_build_cost_reduction: NotEnoughGoldWindowBuildingBuildCostReduction;
    readonly not_enough_gold_window_buy_advisor: NotEnoughGoldWindowBuyAdvisor;
    readonly not_enough_gold_window_building_build_time: NotEnoughGoldWindowBuildingBuildTime;
    readonly not_enough_gold_window_research_build_time: NotEnoughGoldWindowResearchBuildTime;
    readonly not_enough_gold_window_unit_orders: NotEnoughGoldWindowUnitOrders;
    readonly not_enough_gold_window_celebrate_olympic_games: NotEnoughGoldWindowCelebrateOlympicGames;
}

export interface ConfirmationWindowDefault {
    readonly templates: ConfirmationWindowDefaultTemplates;
}

export interface ConfirmationWindowDefaultTemplates {
    readonly confirmation_window: string;
    readonly fatal_attack_warning: string;
    readonly god_selection_confirmation: string;
    readonly cast_spell_confirmation: string;
}

export interface GoToPageDefault {
    readonly templates: GoToPageDefaultTemplates;
}

export interface GoToPageDefaultTemplates {
    readonly go_to_page_window: string;
}

export interface Info {
    readonly templates: InfoAllTownsInOneGroupTemplates;
}

export interface InfoAllTownsInOneGroupTemplates {
    readonly default_tmpl: string;
}

export interface InfoAttackPlannerHelp {
    readonly templates: InfoAttackPlannerHelpTemplates;
}

export interface InfoAttackPlannerHelpTemplates {
    readonly info_attack_planner: string;
}

export interface InterstitialDefault {
    readonly templates: InterstitialDefaultTemplates;
}

export interface InterstitialDefaultTemplates {
    readonly welcome_screen: string;
    readonly animated_welcome: string;
}

export interface NotEnoughGoldWindowBuildingBuildCostReduction {
    readonly templates: NotEnoughGoldWindowBuildingBuildCostReductionTemplates;
}

export interface NotEnoughGoldWindowBuildingBuildCostReductionTemplates {
    readonly not_enough_gold_window_building_build_cost_reduction: string;
}

export interface NotEnoughGoldWindowBuildingBuildTime {
    readonly templates: NotEnoughGoldWindowBuildingBuildTimeTemplates;
}

export interface NotEnoughGoldWindowBuildingBuildTimeTemplates {
    readonly not_enough_gold_window_building_build_time: string;
}

export interface NotEnoughGoldWindowBuyAdvisor {
    readonly templates: NotEnoughGoldWindowBuyAdvisorTemplates;
}

export interface NotEnoughGoldWindowBuyAdvisorTemplates {
    readonly not_enough_gold_window_buy_advisor: string;
}

export interface NotEnoughGoldWindowCelebrateOlympicGames {
    readonly templates: NotEnoughGoldWindowCelebrateOlympicGamesTemplates;
}

export interface NotEnoughGoldWindowCelebrateOlympicGamesTemplates {
    readonly not_enough_gold_window_celebrate_olympic_games: string;
}

export interface NotEnoughGoldWindowDefault {
    readonly templates: NotEnoughGoldWindowDefaultTemplates;
}

export interface NotEnoughGoldWindowDefaultTemplates {
    readonly not_enough_gold_window_default: string;
}

export interface NotEnoughGoldWindowResearchBuildTime {
    readonly templates: NotEnoughGoldWindowResearchBuildTimeTemplates;
}

export interface NotEnoughGoldWindowResearchBuildTimeTemplates {
    readonly not_enough_gold_window_research_build_time: string;
}

export interface NotEnoughGoldWindowUnitOrders {
    readonly templates: NotEnoughGoldWindowUnitOrdersTemplates;
}

export interface NotEnoughGoldWindowUnitOrdersTemplates {
    readonly not_enough_gold_window_unit_orders: string;
}

export interface SaveCoordinatesDefault {
    readonly templates: SaveCoordinatesDefaultTemplates;
}

export interface SaveCoordinatesDefaultTemplates {
    readonly save_coordinates: string;
}

export interface Domination {
    readonly info: DominationInfo;
    readonly status: Status;
    readonly ranking: DominationRanking;
}

export interface DominationInfo {
    readonly templates: Templates2;
    readonly models: CunningModels;
    readonly collections: CollectionsClass;
}

export interface CunningModels {
    readonly DominationStatus: CollectionsClass;
    readonly Player: BuildingOrders;
}

export interface Templates2 {
    readonly domination_info: string;
    readonly pre_domination_progress: string;
    readonly domination_progress: string;
    readonly domination_rules: string;
    readonly post_domination_progress: string;
    readonly post_domination_footer: string;
    readonly player_ranks_tooltip: string;
}

export interface DominationRanking {
    readonly templates: Templates3;
    readonly models: CollectionsClass;
    readonly collections: IndecentCollections;
}

export interface Templates3 {
    readonly domination_ranking: string;
    readonly winner_pedestal: string;
}

export interface Status {
    readonly templates: StatusTemplates;
    readonly models: CollectionsClass;
    readonly collections: StatusCollections;
}

export interface StatusCollections {
    readonly AllianceStatusDominations: CollectionsClass;
    readonly CustomColors: BuildingOrders;
    readonly Benefits: BuildingOrders;
}

export interface StatusTemplates {
    readonly domination_status: string;
    readonly alliance_status: string;
    readonly alliance_status_empty: string;
    readonly world_status: string;
    readonly last_stand: string;
}

export interface DominationEraStarted {
    readonly index: DominationEraStartedIndex;
}

export interface DominationEraStartedIndex {
    readonly templates: Templates4;
    readonly models: HilariousModels;
    readonly collections: CollectionsClass;
}

export interface Templates4 {
    readonly notification_popup: string;
}

export interface FrontendBridgeEaster {
    readonly alchemy: Alchemy;
    readonly recipes: Recipes;
}

export interface Alchemy {
    readonly templates: AlchemyTemplates;
    readonly models: AlchemyModels;
    readonly collections: AlchemyCollections;
}

export interface AlchemyCollections {
    readonly EasterCostModifiers: CollectionsClass;
    readonly EasterIngredients: CollectionsClass;
    readonly EasterRecipes: CollectionsClass;
    readonly PlayerHints: CollectionsClass;
}

export interface AlchemyModels {
    readonly Easter: CollectionsClass;
    readonly EasterRanking: CollectionsClass;
    readonly EasterStats: CollectionsClass;
}

export interface AlchemyTemplates {
    readonly tab_alchemy: string;
    readonly progressbar: string;
    readonly progressbar_tooltip: string;
    readonly ingredients_box: string;
    readonly tutorial: string;
    readonly reward_overlay: string;
    readonly ranking: string;
    readonly tooltip_daily_progress: string;
    readonly sub_window_daily_ranking: string;
    readonly sub_window_overall_ranking: string;
    readonly ranking_tooltip: string;
}

export interface Recipes {
    readonly templates: RecipesTemplates;
    readonly models: RecipesModels;
    readonly collections: AlchemyCollections;
}

export interface RecipesModels {
    readonly Easter: CollectionsClass;
}

export interface RecipesTemplates {
    readonly tab_recipes: string;
    readonly recipes_list: string;
}

export interface EasterCollect {
    readonly index: EasterCollectIndex;
}

export interface EasterCollectIndex {
    readonly templates: Templates5;
    readonly models: RecipesModels;
    readonly collections: AmbitiousCollections;
}

export interface AmbitiousCollections {
    readonly EasterDroppedIngredients: BuildingOrders;
    readonly PlayerHints: CollectionsClass;
}

export interface Templates5 {
    readonly main: string;
}

export interface Eventpass {
    readonly event_pass: EventpassEventPass;
}

export interface EventpassEventPass {
    readonly templates: EventPassTemplates;
    readonly models: MagentaModels;
    readonly collections: EventPassCollections;
}

export interface EventPassCollections {
    readonly PlayerEventPassRewards: CollectionsClass;
}

export interface MagentaModels {
    readonly PlayerEventPass: CollectionsClass;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
}

export interface EventPassTemplates {
    readonly event_pass_main: string;
    readonly event_pass_tutorial: string;
    readonly event_pass_activation_popup: string;
}

export interface Fakeevent {
    readonly index: FakeeventIndex;
}

export interface FakeeventIndex {
    readonly templates: Templates5;
}

export interface FrontendBridgeFarmTown {
    readonly index: FarmTownIndex;
}

export interface FarmTownIndex {
    readonly templates: Templates6;
    readonly models: FriskyModels;
    readonly collections: CunningCollections;
}

export interface CunningCollections {
    readonly FarmTownPlayerRelations: BuildingOrders;
    readonly FarmTowns: BuildingOrders;
    readonly Towns: BuildingOrders;
    readonly CastedPowers: BuildingOrders;
}

export interface FriskyModels {
    readonly PlayerKillpoints: BuildingOrders;
    readonly PremiumFeatures: BuildingOrders;
}

export interface Templates6 {
    readonly index: string;
    readonly card: string;
    readonly locked_card: string;
    readonly trading: string;
    readonly locked: string;
    readonly upgrade_button_tooltip: string;
    readonly advisor_container: string;
    readonly claim_tooltip: string;
}

export interface GiftsWelcome {
    readonly index: GiftsWelcomeIndex;
}

export interface GiftsWelcomeIndex {
    readonly templates: Templates7;
    readonly models: CollectionsClass;
    readonly collections: CollectionsClass;
}

export interface Templates7 {
    readonly main: string;
    readonly gift: string;
}

export interface GodSelection {
    readonly index: GodSelectionIndex;
    readonly artifacts: GodSelectionArtifacts;
    readonly artifacts_with_levels: ArtifactsWithLevels;
}

export interface GodSelectionArtifacts {
    readonly templates: ArtifactsTemplates;
    readonly models: ArtifactsModels;
    readonly collections: CollectionsClass;
}

export interface ArtifactsModels {
    readonly Player: BuildingOrders;
    readonly PlayerGods: BuildingOrders;
}

export interface ArtifactsTemplates {
    readonly artifacts: string;
    readonly artifact_card: string;
}

export interface ArtifactsWithLevels {
    readonly templates: ArtifactsTemplates;
    readonly models: ArtifactsModels;
    readonly collections: ArtifactsWithLevelsCollections;
}

export interface ArtifactsWithLevelsCollections {
    readonly PlayerArtifacts: CollectionsClass;
}

export interface GodSelectionIndex {
    readonly templates: Templates8;
    readonly models: MischievousModels;
    readonly collections: AllOffersCollections;
}

export interface AllOffersCollections {
    readonly Towns: BuildingOrders;
}

export interface MischievousModels {
    readonly PlayerGods: BuildingOrders;
    readonly PremiumFeatures: BuildingOrders;
}

export interface Templates8 {
    readonly index: string;
    readonly description: string;
    readonly no_building: string;
}

export interface GrepolisScore {
    readonly index: GrepolisScoreIndex;
}

export interface GrepolisScoreIndex {
    readonly templates: Templates9;
    readonly models: BraggadociousModels;
    readonly collections: MagentaCollections;
}

export interface MagentaCollections {
    readonly PlayerAwards: BuildingOrders;
    readonly GrepoScoreCategoryHashs: BuildingOrders;
    readonly Benefits: BuildingOrders;
}

export interface BraggadociousModels {
    readonly GrepoScore: BuildingOrders;
}

export interface Templates9 {
    readonly index: string;
    readonly world_points_sizer: string;
    readonly world_points: string;
    readonly category_page: string;
    readonly summary: string;
    readonly award_tooltip: string;
}

export interface Grepolympia {
    readonly matches: Matches;
    readonly info: GrepolympiaInfo;
    readonly training: Training;
    readonly ranking: GrepolympiaRanking;
    readonly shop: GrepolympiaShop;
}

export interface GrepolympiaInfo {
    readonly templates: Templates10;
    readonly models: TrainingModels;
    readonly collections: InfoCollections;
}

export interface InfoCollections {
    readonly PlayerAwards: BuildingOrders;
    readonly PlayerHints: BuildingOrders;
    readonly GrepolympiaRankings: CollectionsClass;
}

export interface TrainingModels {
    readonly GrepolympiaAthlete: CollectionsClass;
    readonly GrepolympiaDiscipline: CollectionsClass;
    readonly GrepolympiaDisciplineRanking?: CollectionsClass;
    readonly Grepolympia: CollectionsClass;
    readonly PlayerLedger: BuildingOrders;
}

export interface Templates10 {
    readonly page_info: string;
    readonly tooltip_award: string;
    readonly attend_info_popup: string;
    readonly current_ranking: string;
    readonly awards: string;
    readonly rewards: string;
    readonly alliance_score: string;
    readonly tutorial: string;
    readonly tooltip_power: string;
    readonly reward_tooltip: string;
}

export interface Matches {
    readonly templates: MatchesTemplates;
    readonly models: MatchesModels;
    readonly collections: CollectionsClass;
}

export interface MatchesModels {
    readonly Grepolympia: CollectionsClass;
    readonly GrepolympiaDiscipline: CollectionsClass;
    readonly GrepolympiaMatch: CollectionsClass;
    readonly PlayerLedger: BuildingOrders;
}

export interface MatchesTemplates {
    readonly page_matches: string;
    readonly table_header: string;
    readonly table_row: string;
    readonly ranking_tooltip: string;
}

export interface GrepolympiaRanking {
    readonly templates: Templates11;
    readonly models: Models1;
    readonly collections: FriskyCollections;
}

export interface FriskyCollections {
    readonly GrepolympiaRankings: CollectionsClass;
}

export interface Models1 {
    readonly GrepolympiaDisciplineRanking: CollectionsClass;
    readonly GrepolympiaDiscipline: CollectionsClass;
    readonly Grepolympia: CollectionsClass;
}

export interface Templates11 {
    readonly page_ranking: string;
    readonly ranking_list: string;
}

export interface GrepolympiaShop {
    readonly templates: ShopTemplates;
    readonly models: Models2;
    readonly collections: MischievousCollections;
}

export interface MischievousCollections {
    readonly GrepolympiaShopItems: CollectionsClass;
}

export interface Models2 {
    readonly PlayerLedger: BuildingOrders;
    readonly GrepolympiaDiscipline: CollectionsClass;
}

export interface ShopTemplates {
    readonly shop: string;
    readonly shop_item: string;
}

export interface Training {
    readonly templates: TrainingTemplates;
    readonly models: TrainingModels;
    readonly collections: TrainingCollections;
}

export interface TrainingCollections {
    readonly GrepolympiaRankings: CollectionsClass;
    readonly TrainingOrders: CollectionsClass;
}

export interface TrainingTemplates {
    readonly training: string;
    readonly discipline: string;
    readonly skills: string;
    readonly top_ranking: string;
    readonly training_ground: string;
}

export interface Grepolympiashop {
    readonly ranking: GrepolympiashopRanking;
    readonly shop: GrepolympiaShop;
}

export interface GrepolympiashopRanking {
    readonly templates: Templates11;
    readonly models: Models3;
    readonly collections: FriskyCollections;
}

export interface Models3 {
    readonly GrepolympiaDisciplineRanking: CollectionsClass;
    readonly Grepolympia: CollectionsClass;
}

export interface Gridevent {
    readonly index: GrideventIndex;
    readonly event_pass: GrideventEventPass;
}

export interface GrideventEventPass {
    readonly templates: EventPassTemplates;
    readonly models: Models4;
    readonly collections: EventPassCollections;
}

export interface Models4 {
    readonly PlayerGrid: CollectionsClass;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
    readonly PlayerEventPass: CollectionsClass;
}

export interface GrideventIndex {
    readonly templates: Templates12;
    readonly models: Models5;
    readonly collections: BraggadociousCollections;
}

export interface BraggadociousCollections {
    readonly PlayerGridFigureRewards: CollectionsClass;
    readonly PlayerGridTurns: CollectionsClass;
    readonly GridEventShopItems: CollectionsClass;
    readonly GridEventInventoryItems: CollectionsClass;
    readonly PlayerEventPassRewards: CollectionsClass;
}

export interface Models5 {
    readonly PlayerLedger: BuildingOrders;
    readonly PlayerGrid: CollectionsClass;
    readonly GridEventCollectedItemCount: CollectionsClass;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
    readonly PlayerEventPass: CollectionsClass;
}

export interface Templates12 {
    readonly main: string;
    readonly figure_reward: string;
    readonly player_grid: string;
    readonly player_grid_cell_content: string;
    readonly shop: string;
    readonly shop_item: string;
    readonly info_icon_tooltip: string;
    readonly rewards_list: string;
    readonly rewards_list_reward: string;
    readonly reward: string;
    readonly indicator_tooltip: string;
    readonly grand_prize_reward_display: string;
    readonly grand_prize_journey: string;
    readonly tutorial: string;
    readonly progression_movement: string;
}

export interface Hercules2014 {
    readonly index: Hercules2014Index;
}

export interface Hercules2014Index {
    readonly templates: Templates13;
    readonly models: Models6;
    readonly collections: Collections1;
}

export interface Collections1 {
    readonly CampaignPlayerStages: CollectionsClass;
    readonly PlayerHints: CollectionsClass;
    readonly CampaignDroppedUnits: BuildingOrders;
}

export interface Models6 {
    readonly CampaignRanking: CollectionsClass;
    readonly CampaignPlayerArmy: CollectionsClass;
    readonly Campaign: CollectionsClass;
}

export interface Templates13 {
    readonly main: string;
    readonly mercenary: string;
    readonly mercenary_tooltip: string;
    readonly healer: string;
    readonly stage: string;
    readonly sub_window_attack: string;
    readonly sub_window_fight_result: string;
    readonly sub_window_last_stage_info: string;
    readonly reward_container: string;
    readonly stage_tooltip: string;
    readonly banner: string;
    readonly fight_animation: string;
    readonly event_info: string;
    readonly tutorial: string;
    readonly collecting_tooltip: string;
    readonly healer_tooltip: string;
    readonly hercules_tooltip: string;
    readonly ranking: string;
    readonly sub_window_daily_ranking: string;
    readonly sub_window_overall_ranking: string;
    readonly hero_box: string;
}

export interface Hercules2014Collect {
    readonly index: Hercules2014CollectIndex;
}

export interface Hercules2014CollectIndex {
    readonly templates: Templates14;
    readonly models: CollectionsClass;
    readonly collections: Collections2;
}

export interface Collections2 {
    readonly CampaignDroppedUnits: BuildingOrders;
    readonly PlayerHints: CollectionsClass;
}

export interface Templates14 {
    readonly hercules2014_index: string;
}

export interface Heroes {
    readonly overview: Overview;
    readonly council: Council;
    readonly collection: HeroesCollection;
}

export interface HeroesCollection {
    readonly templates: Templates15;
    readonly models: CollectionsClass;
    readonly collections: CouncilCollections;
}

export interface CouncilCollections {
    readonly PlayerHeroes: CollectionsClass;
}

export interface Templates15 {
    readonly collection_main: string;
    readonly heroes_list: string;
}

export interface Council {
    readonly templates: CouncilTemplates;
    readonly models: CouncilModels;
    readonly collections: CouncilCollections;
}

export interface CouncilModels {
    readonly PlayerLedger: BuildingOrders;
    readonly Heroes: CollectionsClass;
    readonly HeroesRecruitment: CollectionsClass;
}

export interface CouncilTemplates {
    readonly council_main: string;
    readonly exchange_currency: string;
}

export interface Overview {
    readonly templates: OverviewTemplates;
    readonly models: CouncilModels;
    readonly collections: OverviewCollections;
}

export interface OverviewCollections {
    readonly PlayerHeroes: CollectionsClass;
    readonly FeatureBlocks: BuildingOrders;
}

export interface OverviewTemplates {
    readonly main: string;
    readonly buy_hero_slot_buttons: string;
    readonly exchange_currency: string;
    readonly tooltip_with_arrow: string;
    readonly instant_buy_tooltip: string;
}

export interface HeroesTrain {
    readonly index: HeroesTrainIndex;
}

export interface HeroesTrainIndex {
    readonly templates: Templates16;
    readonly models: Models7;
    readonly collections: CollectionsClass;
}

export interface Models7 {
    readonly PlayerLedger: BuildingOrders;
    readonly Heroes: CollectionsClass;
    readonly PlayerHero: BuildingOrders;
}

export interface Templates16 {
    readonly heroes_train: string;
}

export interface HeroesWelcome {
    readonly welcome: HeroesWelcomeWelcome;
}

export interface HeroesWelcomeWelcome {
    readonly templates: WelcomeTemplates;
    readonly models: CollectionsClass;
    readonly collections: CouncilCollections;
}

export interface WelcomeTemplates {
    readonly welcome_window: string;
}

export interface FrontendBridgeHide {
    readonly index: HideIndex;
}

export interface HideIndex {
    readonly templates: Templates17;
    readonly models: CollectionsClass;
    readonly collections: Collections3;
}

export interface Collections3 {
    readonly LastSpyReports: CollectionsClass;
    readonly Towns: BuildingOrders;
    readonly MovementsSpys: BuildingOrders;
}

export interface Templates17 {
    readonly building_hide: string;
    readonly no_building: string;
}

export interface FrontendBridgeInventory {
    readonly index: InventoryIndex;
}

export interface InventoryIndex {
    readonly templates: Templates18;
    readonly models: Models8;
    readonly collections: Collections4;
}

export interface Collections4 {
    readonly InventoryItems: BuildingOrders;
    readonly PremiumInventoryItems: CollectionsClass;
}

export interface Models8 {
    readonly Inventory: BuildingOrders;
    readonly PlayerLedger: BuildingOrders;
}

export interface Templates18 {
    readonly index: string;
    readonly slot: string;
}

export interface FrontendBridgeMarket {
    readonly own_offers: OwnOffers;
    readonly all_offers: AllOffers;
    readonly create: Create;
    readonly premium_exchange: PremiumExchange;
}

export interface AllOffers {
    readonly templates: AllOffersTemplates;
    readonly models: CollectionsClass;
    readonly collections: AllOffersCollections;
}

export interface AllOffersTemplates {
    readonly all_offers: string;
    readonly other_offer_row: string;
    readonly offer_details: string;
    readonly no_foreign_offers_message: string;
    readonly confirm_order: string;
    readonly no_building: string;
}

export interface Create {
    readonly templates: CreateTemplates;
    readonly models: CreateModels;
    readonly collections: AllOffersCollections;
}

export interface CreateModels {
    readonly CreateOffers: CollectionsClass;
    readonly PlayerLedger: BuildingOrders;
}

export interface CreateTemplates {
    readonly create_offer: string;
    readonly no_building: string;
}

export interface OwnOffers {
    readonly templates: OwnOffersTemplates;
    readonly models: CollectionsClass;
    readonly collections: AllOffersCollections;
}

export interface OwnOffersTemplates {
    readonly own_offers: string;
    readonly own_offer_row: string;
    readonly own_offer_row_tooltip: string;
    readonly offer_details: string;
    readonly no_building: string;
    readonly no_own_offers_message: string;
}

export interface PremiumExchange {
    readonly templates: PremiumExchangeTemplates;
    readonly models: CollectionsClass;
    readonly collections: AllOffersCollections;
}

export interface PremiumExchangeTemplates {
    readonly premium_exchange: string;
    readonly tab_buy_sell: string;
    readonly rules: string;
    readonly resource: string;
    readonly confirm_order: string;
    readonly no_building: string;
}

export interface Welcome {
    readonly index: MilitiaWelcomeIndex;
}

export interface MilitiaWelcomeIndex {
    readonly templates: Templates5;
    readonly models: CollectionsClass;
    readonly collections: CollectionsClass;
}

export interface Missions {
    readonly index: MissionsIndex;
    readonly collection: MissionsCollection;
}

export interface MissionsCollection {
    readonly templates: Templates19;
    readonly models: CollectionModels;
    readonly collections: Collections5;
}

export interface Collections5 {
    readonly Benefits: CollectionsClass;
    readonly PlayerHints: BuildingOrders;
    readonly MissionsExtraRewards: CollectionsClass;
}

export interface CollectionModels {
    readonly MissionStatus: CollectionsClass;
    readonly MissionsRanking: CollectionsClass;
    readonly MissionsPlayerRanking: CollectionsClass;
    readonly MissionReport: CollectionsClass;
    readonly MissionRewards: CollectionsClass;
    readonly PlayerLedger: BuildingOrders;
}

export interface Templates19 {
    readonly collection: string;
    readonly collect_reward: string;
    readonly rewards_list: string;
    readonly rewards_list_reward: string;
    readonly tutorial: string;
    readonly ranking: string;
    readonly ranking_rewards: string;
    readonly overall_ranking: string;
}

export interface MissionsIndex {
    readonly templates: Templates20;
    readonly models: Models9;
    readonly collections: Collections6;
}

export interface Collections6 {
    readonly Benefits: CollectionsClass;
    readonly Towns: BuildingOrders;
    readonly Missions: CollectionsClass;
}

export interface Models9 {
    readonly MissionStatus: CollectionsClass;
    readonly PlayerLedger: BuildingOrders;
    readonly MissionReport: CollectionsClass;
    readonly MissionsUnitData: CollectionsClass;
    readonly MissionsPlayerArmy: BuildingOrders;
}

export interface Templates20 {
    readonly index: string;
    readonly mission: string;
    readonly mission_running: string;
    readonly details: string;
    readonly info: string;
    readonly send_units: string;
    readonly unit_picker: string;
    readonly progress: string;
    readonly mission_result: string;
    readonly buy_unit: string;
    readonly indicator_tooltip: string;
    readonly unit_card: string;
}

export interface MobileTutorial {
    readonly index: MobileTutorialIndex;
}

export interface MobileTutorialIndex {
    readonly templates: Templates5;
    readonly models: CollectionsClass;
    readonly collections: Collections7;
}

export interface Collections7 {
    readonly PlayerHints: PlayerHints;
}

export interface PlayerHints {
    readonly notfetch: boolean;
}

export interface Notes {
    readonly note1: Note;
    readonly note2: Note;
    readonly note3: Note;
    readonly note4: Note;
    readonly note5: Note;
}

export interface Note {
    readonly templates: Note1Templates;
    readonly models: CollectionsClass;
    readonly collections: Note1Collections;
}

export interface Note1Collections {
    readonly PlayerNotes: CollectionsClass;
}

export interface Note1Templates {
    readonly edit: string;
    readonly preview: string;
    readonly sub_window_new_note: string;
    readonly sub_window_rename_note: string;
    readonly sub_window_delete_note: string;
}

export interface OlympusOverview {
    readonly info: OlympusOverviewInfo;
    readonly small_temples: SmallTemples;
    readonly large_temples: LargeTemples;
    readonly olympus: Olympus;
}

export interface OlympusOverviewInfo {
    readonly templates: Templates21;
    readonly models: LargeTemplesModels;
    readonly collections: CollectionsClass;
}

export interface LargeTemplesModels {
    readonly Olympus: BuildingOrders;
}

export interface Templates21 {
    readonly overview_info: string;
    readonly overview_info_header: string;
    readonly rules: string;
    readonly player_ranks_tooltip: string;
    readonly overview_post_temple_header: string;
}

export interface LargeTemples {
    readonly templates: LargeTemplesTemplates;
    readonly models: LargeTemplesModels;
    readonly collections: LargeTemplesCollections;
}

export interface LargeTemplesCollections {
    readonly Temples: BuildingOrders;
    readonly CustomColors: BuildingOrders;
}

export interface LargeTemplesTemplates {
    readonly overview_large_temples: string;
    readonly overview_large_temples_header: string;
    readonly large_temple_list_item: string;
    readonly large_temple_list_slider: string;
    readonly large_temple_silhouette: string;
    readonly alliance_flag: string;
    readonly overview_post_temple_header: string;
}

export interface Olympus {
    readonly templates: OlympusTemplates;
    readonly models: LargeTemplesModels;
    readonly collections: LargeTemplesCollections;
}

export interface OlympusTemplates {
    readonly overview_olympus: string;
    readonly overview_olympus_header: string;
    readonly overview_post_temple_header: string;
    readonly alliance_flag: string;
}

export interface SmallTemples {
    readonly templates: SmallTemplesTemplates;
    readonly models: LargeTemplesModels;
    readonly collections: SmallTemplesCollections;
}

export interface SmallTemplesCollections {
    readonly Temples: BuildingOrders;
}

export interface SmallTemplesTemplates {
    readonly overview_small_temples: string;
    readonly overview_small_temples_header: string;
    readonly small_temple_row: string;
    readonly filters: string;
    readonly overview_post_temple_header: string;
}

export interface OlympusRanking {
    readonly index: RankingClass;
}

export interface RankingClass {
    readonly templates: Templates22;
    readonly models: Models10;
    readonly collections: IndecentCollections;
}

export interface Models10 {
    readonly OlympusRanking: CollectionsClass;
    readonly Player: BuildingOrders;
}

export interface Templates22 {
    readonly ranking: string;
    readonly flags_in_background: string;
}

export interface OlympusTempleInfo {
    readonly index: PurpleIndex;
    readonly temple_defense: TempleDefense;
    readonly ranking: RankingClass;
}

export interface PurpleIndex {
    readonly templates: Templates23;
    readonly models: Models11;
    readonly collections: LargeTemplesCollections;
}

export interface Models11 {
    readonly TempleInfo: CollectionsClass;
    readonly Olympus: BuildingOrders;
}

export interface Templates23 {
    readonly temple_info: string;
    readonly command: string;
    readonly revolt: string;
    readonly temple_info_image: string;
    readonly temple_info_image_olympus: string;
    readonly olympus_curse: string;
    readonly temple_powers_overlay: string;
}

export interface TempleDefense {
    readonly templates: TempleDefenseTemplates;
    readonly models: TempleDefenseModels;
    readonly collections: SmallTemplesCollections;
}

export interface TempleDefenseModels {
    readonly TempleInfo: CollectionsClass;
}

export interface TempleDefenseTemplates {
    readonly temple_defense: string;
    readonly defense_list_item: string;
    readonly temple_defense_slot_wrapper: string;
}

export interface FrontendBridgePlace {
    readonly support_overview_support_for_active_town: SupportOverviewSupportForActiveTown;
    readonly support_overview_active_town_supports_towns: SupportOverviewActiveTownSupportsTowns;
    readonly support_overview_active_player_supports_towns: SupportOverviewActivePlayerSupportsTowns;
    readonly support_overview_active_player_supports_town: SupportOverviewActivePlayerSupportsTown;
}

export interface SupportOverviewActivePlayerSupportsTown {
    readonly templates: SupportOverviewActivePlayerSupportsTownTemplates;
    readonly models: SupportOverviewActivePlayerSupportsTownModels;
    readonly collections: SupportOverviewActivePlayerSupportsTownCollections;
}

export interface SupportOverviewActivePlayerSupportsTownCollections {
    readonly ActivePlayerSupportsTown: ActivePlayerSupportsTown;
}

export interface ActivePlayerSupportsTown {
    readonly arguments: Arguments;
}

export interface Arguments {
    readonly town_id: string;
}

export interface SupportOverviewActivePlayerSupportsTownModels {
    readonly ConstrainedTown: CollectionsClass;
}

export interface SupportOverviewActivePlayerSupportsTownTemplates {
    readonly main: string;
    readonly list_support: string;
    readonly list_total_units: string;
    readonly list_units_in_town: string;
    readonly list_no_results: string;
}

export interface SupportOverviewActivePlayerSupportsTowns {
    readonly templates: SupportOverviewActivePlayerSupportsTownTemplates;
    readonly models: SupportOverviewActivePlayerSupportsTownModels;
    readonly collections: SupportOverviewActivePlayerSupportsTownsCollections;
}

export interface SupportOverviewActivePlayerSupportsTownsCollections {
    readonly ActivePlayerSupportsTowns: CollectionsClass;
}

export interface SupportOverviewActiveTownSupportsTowns {
    readonly templates: SupportOverviewActivePlayerSupportsTownTemplates;
    readonly models: SupportOverviewActivePlayerSupportsTownModels;
    readonly collections: SupportOverviewActiveTownSupportsTownsCollections;
}

export interface SupportOverviewActiveTownSupportsTownsCollections {
    readonly ActiveTownSupportsTowns: CollectionsClass;
}

export interface SupportOverviewSupportForActiveTown {
    readonly templates: SupportOverviewActivePlayerSupportsTownTemplates;
    readonly models: SupportOverviewActivePlayerSupportsTownModels;
    readonly collections: SupportOverviewSupportForActiveTownCollections;
}

export interface SupportOverviewSupportForActiveTownCollections {
    readonly SupportForActiveTown: CollectionsClass;
}

export interface Quest {
    readonly info: QuestInfo;
}

export interface QuestInfo {
    readonly templates: CollectionsClass;
    readonly models: ProgressModels;
    readonly collections: CollectionsClass;
}

export interface ProgressModels {
    readonly Progressable: BuildingOrders;
}

export interface QuestProgress {
    readonly progress: Progress;
}

export interface Progress {
    readonly templates: CollectionsClass;
    readonly models: ProgressModels;
    readonly collections: ProgressCollections;
}

export interface ProgressCollections {
    readonly PlayerHeroes: BuildingOrders;
}

export interface QuestWelcome {
    readonly welcome: QuestWelcomeWelcome;
}

export interface QuestWelcomeWelcome {
    readonly templates: CollectionsClass;
    readonly models: WelcomeModels;
    readonly collections: CollectionsClass;
}

export interface WelcomeModels {
    readonly Progressable: BuildingOrders;
    readonly Player: BuildingOrders;
    readonly PlayerSettings: BuildingOrders;
}

export interface Questlog {
    readonly index: QuestlogIndex;
}

export interface QuestlogIndex {
    readonly templates: Templates24;
    readonly models: Models12;
    readonly collections: Collections8;
}

export interface Collections8 {
    readonly IslandQuestPlayerRelations: BuildingOrders;
    readonly IslandQuests: BuildingOrders;
    readonly Units: BuildingOrders;
    readonly Towns: BuildingOrders;
    readonly PlayerHeroes: BuildingOrders;
}

export interface Models12 {
    readonly PlayerSettings: BuildingOrders;
    readonly PlayerLedger: BuildingOrders;
}

export interface Templates24 {
    readonly index: string;
    readonly quest_index: string;
    readonly quest_detail: string;
    readonly category: string;
    readonly quest: string;
    readonly iq_quest: string;
    readonly iq_empty_quest: string;
    readonly iq_empty_detail: string;
    readonly iq_quest_detail: string;
    readonly iq_quest_decision: string;
    readonly iq_quest_challenge: string;
    readonly iq_tooltips: string;
    readonly wnd_attack_npc: string;
    readonly wnd_collect_units: string;
    readonly wnd_spend_resources: string;
    readonly wnd_provoke_attack: string;
    readonly wnd_bear_effect: string;
    readonly wnd_wait_time: string;
    readonly town_groups_list: string;
}

export interface Quizevent {
    readonly index: QuizeventIndex;
}

export interface QuizeventIndex {
    readonly templates: Templates25;
    readonly models: Models13;
    readonly collections: Collections9;
}

export interface Collections9 {
    readonly Benefits: BuildingOrders;
}

export interface Models13 {
    readonly PlayerQuizEvent: CollectionsClass;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
}

export interface Templates25 {
    readonly main: string;
    readonly info_overlay: string;
    readonly rewards_list: string;
    readonly rewards_list_reward: string;
}

export interface RecruitingList {
    readonly index: RecruitingListIndex;
}

export interface RecruitingListIndex {
    readonly templates: Templates26;
    readonly models: CollectionsClass;
    readonly collections: Collections10;
}

export interface Collections10 {
    readonly RemainingUnitOrders: BuildingOrders;
    readonly FeatureBlocks: BuildingOrders;
}

export interface Templates26 {
    readonly recruiting_list: string;
    readonly unit_order_entry: string;
}

export interface Rota {
    readonly index: RotaIndex;
    readonly event_pass: RotaEventPass;
}

export interface RotaEventPass {
    readonly templates: EventPassTemplates;
    readonly models: Models14;
    readonly collections: EventPassCollections;
}

export interface Models14 {
    readonly RotaEventData: CollectionsClass;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
    readonly PlayerEventPass: CollectionsClass;
}

export interface RotaIndex {
    readonly templates: Templates27;
    readonly models: Models15;
    readonly collections: Collections11;
}

export interface Collections11 {
    readonly RotaEventInventoryItems: CollectionsClass;
    readonly RotaEventShopItems: CollectionsClass;
    readonly RotaUnfinishedPaintingElements: CollectionsClass;
    readonly PlayerEventPassRewards: CollectionsClass;
}

export interface Models15 {
    readonly PlayerRota: CollectionsClass;
    readonly RotaEventData: CollectionsClass;
    readonly RotaEventCollectedItemCount: CollectionsClass;
    readonly PlayerLedger: BuildingOrders;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
    readonly PlayerEventPass: CollectionsClass;
}

export interface Templates27 {
    readonly index: string;
    readonly rewards_list: string;
    readonly rewards_list_reward: string;
    readonly indicator_tooltip: string;
    readonly tutorial: string;
    readonly shop: string;
    readonly shop_item: string;
}

export interface RuntimeInfo {
    readonly index: RuntimeInfoIndex;
}

export interface RuntimeInfoIndex {
    readonly templates: StickyTemplates;
    readonly models: Models16;
    readonly collections: Collections12;
}

export interface Collections12 {
    readonly Units: BuildingOrders;
    readonly Towns: BuildingOrders;
}

export interface Models16 {
    readonly RuntimeSimulator: CollectionsClass;
}

export interface Senate {
    readonly index: SenateIndex;
}

export interface SenateIndex {
    readonly templates: Templates28;
    readonly models: CollectionsClass;
    readonly collections: CollectionsClass;
}

export interface Templates28 {
    readonly index: string;
    readonly building: string;
}

export interface Spawn {
    readonly index: SpawnIndex;
}

export interface SpawnIndex {
    readonly templates: Templates29;
    readonly models: Models17;
    readonly collections: Collections13;
}

export interface Collections13 {
    readonly SpawnMissions: CollectionsClass;
    readonly Units: BuildingOrders;
    readonly PlayerHints: BuildingOrders;
}

export interface Models17 {
    readonly Spawn: BuildingOrders;
}

export interface Templates29 {
    readonly spawn_window: string;
    readonly sub_window_reward: string;
    readonly tutorial: string;
    readonly _missions: string;
}

export interface FrontendBridgeStorage {
    readonly index: StorageIndex;
}

export interface StorageIndex {
    readonly templates: Templates30;
    readonly models: IndecentModels;
    readonly collections: AllOffersCollections;
}

export interface Templates30 {
    readonly index: string;
    readonly gameborder: string;
}

export interface StrategicMapFilter {
    readonly index: StrategicMapFilterIndex;
}

export interface StrategicMapFilterIndex {
    readonly templates: Templates31;
    readonly models: Models18;
    readonly collections: Collections14;
}

export interface Collections14 {
    readonly CustomColors: BuildingOrders;
    readonly AlliancePacts: BuildingOrders;
    readonly PlayerHints: PlayerHints;
}

export interface Models18 {
    readonly PremiumFeatures: BuildingOrders;
    readonly Player: BuildingOrders;
}

export interface Templates31 {
    readonly index: string;
    readonly highlight: string;
}

export interface Tasksevent {
    readonly index: TaskseventIndex;
}

export interface TaskseventIndex {
    readonly templates: Templates32;
    readonly models: Models19;
    readonly collections: Collections15;
}

export interface Collections15 {
    readonly PlayerTasks: CollectionsClass;
}

export interface Models19 {
    readonly PlayerTasksEvent: CollectionsClass;
    readonly TasksEventGrandPrize: CollectionsClass;
}

export interface Templates32 {
    readonly grand_prize_slot: string;
    readonly index: string;
    readonly task: string;
    readonly tooltip: string;
    readonly tutorial: string;
}

export interface TownOverlay {
    readonly index: TownOverlayIndex;
}

export interface TownOverlayIndex {
    readonly templates: StickyTemplates;
    readonly collections: Collections9;
}

export interface Turnovertokens {
    readonly index: TurnovertokensIndex;
    readonly shop: TurnovertokensShop;
    readonly sanctuary: Sanctuary;
}

export interface TurnovertokensIndex {
    readonly templates: Templates33;
    readonly models: Models20;
    readonly collections: Collections16;
}

export interface Collections16 {
    readonly Benefits: BuildingOrders;
    readonly AssassinsPlayerSpots: CollectionsClass;
    readonly PlayerHints: BuildingOrders;
}

export interface Models20 {
    readonly AssassinsPlayerMetaData: CollectionsClass;
    readonly PlayerLedger: BuildingOrders;
    readonly AssassinsCommunityGoals: CollectionsClass;
    readonly AssassinsRanking: CollectionsClass;
    readonly TurnOverTokenPlayerRanking: CollectionsClass;
}

export interface Templates33 {
    readonly fight: string;
    readonly fight_spots: string;
    readonly arrow: string;
    readonly sub_window_quiver_empty: string;
    readonly sub_window_tutorial: string;
    readonly sub_window_reward_presentation: string;
    readonly sub_window_assassin_animation: string;
    readonly sub_window_assassin_animation_arrow: string;
    readonly sub_window_assassin_animation_points: string;
    readonly sub_window_all_units_dead_animation: string;
    readonly sub_window_daily_ranking: string;
    readonly goals: string;
    readonly ranking: string;
    readonly collection_complete: string;
}

export interface Sanctuary {
    readonly templates: SanctuaryTemplates;
    readonly models: SanctuaryModels;
    readonly collections: SanctuaryCollections;
}

export interface SanctuaryCollections {
    readonly PlayerHints: BuildingOrders;
}

export interface SanctuaryModels {
    readonly AssassinsPlayerMetaData: CollectionsClass;
}

export interface SanctuaryTemplates {
    readonly sanctuary: string;
    readonly sub_window_tutorial: string;
}

export interface TurnovertokensShop {
    readonly templates: ShopTemplates;
    readonly models: Models21;
    readonly collections: Collections17;
}

export interface Collections17 {
    readonly AssassinsShopItems: CollectionsClass;
}

export interface Models21 {
    readonly PlayerLedger: BuildingOrders;
}

export interface UpdateNotification {
    readonly index: InfoClass;
}

export interface InfoClass {
    readonly templates: CollectionsClass;
    readonly models: CollectionsClass;
    readonly collections: CollectionsClass;
}

export interface ValentinesdayCollect {
    readonly index: ValentinesdayCollectIndex;
}

export interface ValentinesdayCollectIndex {
    readonly templates: Templates34;
    readonly models: CollectionsClass;
    readonly collections: CollectionsClass;
}

export interface Templates34 {
    readonly welcome_screen: string;
}

export interface WorldEndWelcome {
    readonly index: WorldEndWelcomeIndex;
}

export interface WorldEndWelcomeIndex {
    readonly templates: Templates5;
    readonly models: CollectionsClass;
    readonly collections: SanctuaryCollections;
}

export interface WorldWonderDonations {
    readonly index: WorldWonderDonationsIndex;
}

export interface WorldWonderDonationsIndex {
    readonly templates: Templates35;
    readonly models: CollectionsClass;
    readonly collections: Collections18;
}

export interface Collections18 {
    readonly WonderParticipations: CollectionsClass;
}

export interface Templates35 {
    readonly resources: string;
    readonly favor: string;
}

export interface WorldWondersInfo {
    readonly ranking: WorldWondersInfoRanking;
    readonly info: InfoClass;
}

export interface WorldWondersInfoRanking {
    readonly templates: Templates36;
    readonly models: Models22;
    readonly collections: IndecentCollections;
}

export interface Models22 {
    readonly WondersRanking: CollectionsClass;
    readonly Player: BuildingOrders;
}

export interface Templates36 {
    readonly ranking: string;
    readonly flags_in_background: string;
    readonly main_ranking_header_row: string;
    readonly main_ranking_column: string;
    readonly wonder_tooltip: string;
}

export interface GodPowersCommand {
    readonly ares: { [key: string]: string };
    readonly zeus: { [key: string]: string };
    readonly hera: Hera;
    readonly poseidon: Hera;
    readonly athena: { [key: string]: string };
    readonly hades: { [key: string]: string };
    readonly artemis: { [key: string]: string };
}

export interface Hera {
    readonly "0": string;
}

export interface GodPowersForOtherTowns {
    readonly aphrodite: string[];
    readonly ares: GodPowersForOtherTownsAres;
    readonly zeus: string[];
    readonly hera: string[];
    readonly poseidon: string[];
    readonly athena: string[];
    readonly hades: string[];
    readonly artemis: string[];
}

export interface GodPowersForOtherTownsAres {
    readonly "1": string;
}

export interface GodPowersTown {
    readonly aphrodite: { [key: string]: string };
    readonly ares: { [key: string]: string };
    readonly zeus: { [key: string]: string };
    readonly hera: { [key: string]: string };
    readonly poseidon: { [key: string]: string };
    readonly athena: { [key: string]: string };
    readonly hades: { [key: string]: string };
    readonly artemis: { [key: string]: string };
}

export interface Gods {
    readonly zeus: Artemis;
    readonly poseidon: Artemis;
    readonly hera: Artemis;
    readonly athena: Artemis;
    readonly hades: Artemis;
    readonly artemis: Artemis;
    readonly aphrodite: Aphrodite;
    readonly ares: GodsAres;
}

export interface Aphrodite {
    readonly name: string;
    readonly id: string;
    readonly units: UnitValue[];
    readonly powers: string[];
    readonly topic: string;
    readonly description: string;
}

export interface UnitValue {
    readonly id: string;
    readonly name: string;
    readonly name_plural: string;
    readonly speed: number;
    readonly attack: number;
    readonly description: string;
    readonly resources: Resources;
    readonly favor: number;
    readonly population: number;
    readonly build_time: number;
    readonly god_id: null | string;
    readonly research_dependencies: string[] | null;
    readonly building_dependencies: PurpleBuildingDependencies | null;
    readonly is_naval: boolean;
    readonly max_per_attack: number | null;
    readonly max_per_support: null;
    readonly unit_function: UnitFunction;
    readonly category: UnitCategory;
    readonly special_abilities: string[];
    readonly passive: string;
    readonly is_npc_unit_only: boolean;
    readonly def_hack?: number;
    readonly def_pierce?: number;
    readonly def_distance?: number;
    readonly booty?: number;
    readonly infantry?: boolean | null;
    readonly flying?: boolean | null;
    readonly attack_type?: AttackType;
    readonly defense?: number;
    readonly transport?: null;
    readonly capacity?: number;
}

export enum AttackType {
    Distance = "distance",
    Hack = "hack",
    Pierce = "pierce",
}

export interface PurpleBuildingDependencies {
    readonly temple?: number;
    readonly docks?: number;
    readonly barracks?: number;
    readonly academy?: number;
}

export enum UnitCategory {
    MythologicalGround = "mythological_ground",
    MythologicalNaval = "mythological_naval",
    RegularGround = "regular_ground",
    RegularNaval = "regular_naval",
}

export enum UnitFunction {
    FunctionBoth = "function_both",
    FunctionDef = "function_def",
    FunctionNone = "function_none",
    FunctionOff = "function_off",
}

export interface GodsAres {
    readonly name: string;
    readonly id: string;
    readonly units: AresUnit[];
    readonly powers: string[];
    readonly topic: string;
    readonly description: string;
}

export interface AresUnit {
    readonly id: string;
    readonly name: string;
    readonly name_plural: string;
    readonly speed: number;
    readonly attack: number;
    readonly description: string;
    readonly resources: Resources;
    readonly favor: number;
    readonly population: number;
    readonly build_time: number;
    readonly god_id: string;
    readonly research_dependencies: any[];
    readonly building_dependencies: FluffyBuildingDependencies;
    readonly is_naval: boolean;
    readonly max_per_attack: null;
    readonly max_per_support: null;
    readonly unit_function: UnitFunction;
    readonly category: UnitCategory;
    readonly special_abilities: string[];
    readonly passive: string;
    readonly is_npc_unit_only: boolean;
    readonly def_hack: number;
    readonly def_pierce: number;
    readonly def_distance: number;
    readonly booty: number;
    readonly infantry: null;
    readonly flying: boolean | null;
    readonly attack_type: AttackType;
}

export interface FluffyBuildingDependencies {
    readonly temple: number;
    readonly barracks?: number;
}

export interface Artemis {
    readonly name: string;
    readonly id: string;
    readonly units: ArtemisUnit[];
    readonly powers: string[];
    readonly topic: string;
    readonly description: string;
}

export interface ArtemisUnit {
    readonly id: string;
    readonly name: string;
    readonly name_plural: string;
    readonly speed: number;
    readonly attack: number;
    readonly description: string;
    readonly resources: Resources;
    readonly favor: number;
    readonly population: number;
    readonly build_time: number;
    readonly god_id: string;
    readonly research_dependencies: any[];
    readonly building_dependencies: TentacledBuildingDependencies;
    readonly is_naval: boolean;
    readonly max_per_attack: null;
    readonly max_per_support: null;
    readonly unit_function: UnitFunction;
    readonly category: UnitCategory;
    readonly special_abilities: string[];
    readonly passive: string;
    readonly is_npc_unit_only: boolean;
    readonly def_hack?: number;
    readonly def_pierce?: number;
    readonly def_distance?: number;
    readonly booty?: number;
    readonly infantry?: null;
    readonly flying?: boolean | null;
    readonly attack_type?: AttackType;
    readonly defense?: number;
    readonly transport?: null;
    readonly capacity?: number;
}

export interface TentacledBuildingDependencies {
    readonly temple: number;
}

export interface Hero {
    readonly id: string;
    readonly category: HeroCategory;
    readonly name: string;
    readonly description: string;
    readonly description_args: DescriptionArgs;
    readonly short_description: string;
    readonly default_level: number;
    readonly cost: number;
    readonly award_requirements: any[];
    readonly is_naval: boolean;
    readonly exclusive: boolean;
    readonly hidden: boolean;
    readonly attack_type: AttackType;
    readonly attack: number;
    readonly def_hack: number;
    readonly def_pierce: number;
    readonly def_distance: number;
    readonly speed: number;
    readonly booty: number;
    readonly preconditions: any[];
    readonly max_per_attack: number;
    readonly max_per_support: number;
}

export enum HeroCategory {
    War = "war",
    Wisdom = "wisdom",
}

export interface DescriptionArgs {
    readonly "1": The1;
}

export interface The1 {
    readonly value: number;
    readonly level_mod: number;
    readonly unit: UnitEnum;
}

export enum UnitEnum {
    Empty = "%",
    Unit = "",
}

export interface GameDataInventory {
    readonly cost_of_extension: { [key: string]: number };
    readonly start_amount_of_slots: number;
    readonly total_amount_of_slots: number;
}

export interface InventoryItems {
    readonly power_reward_effect_inventory_item: PowerRewardEffectInventoryItem;
}

export interface PowerRewardEffectInventoryItem {
    readonly type: MysticRewardTypeEnum;
    readonly name: string;
    readonly description: string;
    readonly properties: any[];
}

export interface IslandQuests {
    readonly exchange_quest_cost: number;
    readonly skip_cooldown_cost: number;
}

export interface Powers {
    readonly narcissism: AresArmy;
    readonly enlist_militia_penalty: AttackTypeBoostAlliance;
    readonly charitable_festival: AresSacrificeBoostAlliance;
    readonly hymn_to_aphrodite: AresSacrifice;
    readonly pygmalion: AresRage;
    readonly ares_sacrifice: AresSacrifice;
    readonly ares_army: AresArmy;
    readonly bloodlust: Acumen;
    readonly spartan_training: AttackTypeBoostAlliance;
    readonly divine_sign: AresArmy;
    readonly bolt: Acumen;
    readonly fair_wind: AresSacrificeBoostAlliance;
    readonly transformation: AresSacrifice;
    readonly wedding: AresArmy;
    readonly happiness: ANewHope;
    readonly fertility_improvement: Acumen;
    readonly desire: ANewHope;
    readonly kingly_gift: Acumen;
    readonly call_of_the_ocean: AresArmy;
    readonly earthquake: AresSacrificeBoostAlliance;
    readonly sea_storm: AttackTypeBoostAlliance;
    readonly patroness: AresSacrificeBoostAlliance;
    readonly wisdom: AresArmy;
    readonly town_protection: AresSacrifice;
    readonly strength_of_heroes: Acumen;
    readonly pest: AresSacrificeBoostAlliance;
    readonly resurrection: AttackTypeBoostAlliance;
    readonly underworld_treasures: ANewHope;
    readonly cap_of_invisibility: AresSacrifice;
    readonly natures_gift: AresArmy;
    readonly effort_of_the_huntress: AttackTypeBoostAlliance;
    readonly illusion: AresSacrifice;
    readonly cleanse: AttackBoost;
    readonly acumen: Acumen;
    readonly divine_senses: AresArmy;
    readonly myrmidion_attack: AttackBoost;
    readonly trojan_defense: AresSacrifice;
    readonly resource_boost: ResourceBoost;
    readonly favor_boost: AresSacrificeBoostAlliance;
    readonly unit_training_boost: AttackBoost;
    readonly unit_training_boost_non_scaling: AresArmy;
    readonly instant_favor: AttackBoost;
    readonly favor_of_the_gods: AresSacrificeBoostAlliance;
    readonly instant_resources: InstantResources;
    readonly instant_resources_rare: InstantResources;
    readonly instant_resources_epic: InstantResources;
    readonly instant_currency: InstantCurrency;
    readonly instant_currency_crm: InstantCurrencyCRM;
    readonly instant_gold: AttackTypeBoostAlliance;
    readonly hermes_boost: AresSacrifice;
    readonly happy_folks: AresSacrifice;
    readonly attack_boost: AttackBoost;
    readonly defense_boost: AresSacrifice;
    readonly building_order_boost: Acumen;
    readonly unit_order_boost: AttackBoost;
    readonly unit_movement_boost: AttackBoost;
    readonly forced_loyalty: Acumen;
    readonly loyalty_loss: Acumen;
    readonly attack_penalty: ANewHope;
    readonly defense_penalty: ANewHope;
    readonly illusion_defense_penalty: AttackBoost;
    readonly favor_penalty: AresArmy;
    readonly wood_production_penalty: AresSacrificeBoostAlliance;
    readonly stone_production_penalty: Acumen;
    readonly iron_production_penalty: AresArmy;
    readonly longterm_festival_resource_boost: Acumen;
    readonly longterm_attack_boost: Acumen;
    readonly longterm_defense_boost: Acumen;
    readonly longterm_resource_boost: LongtermResourceBoost;
    readonly longterm_unit_order_boost: Acumen;
    readonly longterm_unit_order_penalty: LongtermUnitOrderPenalty;
    readonly luxurious_residence: ANewHope;
    readonly travelling_mentor: AresSacrifice;
    readonly population_boost: PopulationBoost;
    readonly starter_protection: AttackTypeBoostAlliance;
    readonly a_new_hope: ANewHope;
    readonly great_arming: Acumen;
    readonly demoralizing_plague: AresSacrifice;
    readonly demoralized_army: ANewHope;
    readonly sudden_aid: Acumen;
    readonly wedding_of_the_aristocrats: AresArmy;
    readonly chain_lightning: AttackBoost;
    readonly summoning_of_the_nereids: Acumen;
    readonly help_of_the_nereids: AresSacrifice;
    readonly passionate_population: AresArmy;
    readonly passionate_training: AresArmy;
    readonly suffering_and_mourning: Acumen;
    readonly suffering: Acumen;
    readonly mourning: AresSacrifice;
    readonly divine_intervention: AttackBoost;
    readonly divine_aura: AresSacrifice;
    readonly aura_of_healing: ANewHope;
    readonly hero: AresSacrifice;
    readonly city_skin: CitySkin;
    readonly culture_level: AresArmy;
    readonly culture_points: Acumen;
    readonly instant_resources_mermaid: AttackTypeBoostAlliance;
    readonly attack_ship_attack_boost_small: AttackBoost;
    readonly attack_ship_attack_boost_medium: AttackBoost;
    readonly attack_ship_attack_boost_large: AttackBoost;
    readonly longterm_trade_speed_boost: Acumen;
    readonly assassins_resource_boost: ANewHope;
    readonly assassins_building_order_boost: ANewHope;
    readonly assassins_unit_order_boost: ANewHope;
    readonly assassins_favor_boost: ANewHope;
    readonly assassins_acumen: ANewHope;
    readonly rare_resource_boost: AttackTypeBoostAlliance;
    readonly epic_resource_boost: AresSacrificeBoostAlliance;
    readonly rare_favor_boost: AttackTypeBoostAlliance;
    readonly epic_favor_boost: AresSacrificeBoostAlliance;
    readonly rare_building_order_boost: AttackTypeBoostAlliance;
    readonly epic_building_order_boost: AresArmy;
    readonly rare_unit_order_boost: AttackTypeBoostAlliance;
    readonly epic_unit_order_boost: AresSacrificeBoostAlliance;
    readonly rare_defense_boost: AttackTypeBoostAlliance;
    readonly epic_defense_boost: AresArmy;
    readonly rare_attack_boost: AttackTypeBoostAlliance;
    readonly epic_attack_boost: AttackTypeBoostAlliance;
    readonly instant_resources_package: AresSacrificeBoostAlliance;
    readonly instant_favor_package: AttackBoost;
    readonly instant_unit_package: AresArmy;
    readonly loyalty_resource_boost: ANewHope;
    readonly crafting_ingredients: AresArmy;
    readonly crafting_ingredients_boost: Crafting;
    readonly campaign_units: AresArmy;
    readonly mission_units: ANewHope;
    readonly olympic_torch: GrepolympiaChampionship1;
    readonly olympic_merchant: GrepolympiaChampionship1;
    readonly olympic_sword: GrepolympiaChampionship1;
    readonly olympic_senses: GrepolympiaChampionship1;
    readonly grepolympia_athlete_boost: GrepolympiaAthleteBoost;
    readonly grepolympia_championship_1: GrepolympiaChampionship1;
    readonly grepolympia_championship_2: GrepolympiaChampionship1;
    readonly grepolympia_championship_3: GrepolympiaChampionship1;
    readonly grepolympia_championship_4: GrepolympiaChampionship1;
    readonly missions_power_1: MissionsPower1_Class;
    readonly missions_power_2: MissionsPower1_Class;
    readonly missions_power_3: MissionsPower1_Class;
    readonly missions_power_4: MissionsPower1_Class;
    readonly missions_reduce_ritual_cooldown: MissionsPower1_Class;
    readonly crafting_recipes_power: Crafting;
    readonly wheel_free_refill: WheelFreeRefill;
    readonly grid_event_advanced_scouts: GridEventAdvancedScouts;
    readonly rota_event_tyches_wreath: RotaEventTychesWreath;
    readonly event_pass_divine_prizes: AresSacrificeBoostAlliance;
    readonly divine_battle_strategy_rare: AresSacrifice;
    readonly divine_battle_strategy_epic: AresSacrifice;
    readonly naval_battle_strategy_rare: AresArmy;
    readonly naval_battle_strategy_epic: AresArmy;
    readonly land_battle_strategy_rare: Acumen;
    readonly land_battle_strategy_epic: Acumen;
    readonly olympus_mortal_curse: AresArmy;
    readonly blessing_of_olympus: ANewHope;
    readonly ares_rage: AresRage;
    readonly soterias_shrine: AresRage;
    readonly unit_attack_boost_alliance: AresArmy;
    readonly attack_type_boost_alliance: AttackTypeBoostAlliance;
    readonly resource_boost_alliance: ResourceBoostAlliance;
    readonly mythical_type_attack_boost_alliance: AttackBoost;
    readonly unit_order_boost_alliance: UnitOrderOstAlliance;
    readonly unit_order_boost_alliance_hera: UnitOrderBoostAllianceHera;
    readonly attack_boost_alliance: AttackBoostAlliance;
    readonly defense_boost_alliance: DefenseBoostAlliance;
    readonly unit_movement_boost_alliance: UnitMovementBoostAlliance;
    readonly unit_defense_boost_alliance: AttackBoost;
    readonly bolt_lightning_boost_alliance: Acumen;
    readonly unit_order_penalty_effect_alliance: LongtermUnitOrderPenalty;
    readonly attack_defense_boost_alliance: AttackDefenseBoostAlliance;
    readonly favor_boost_alliance: FavorBoostAlliance;
    readonly population_boost_alliance: PopulationBoostAlliance;
    readonly happiness_power_boost_alliance: AresSacrifice;
    readonly illusion_defense_penalty_alliance: AttackBoost;
    readonly heroic_power_boost_alliance: HeroicPowerBoostAlliance;
    readonly favorable_wind_boost_alliance: Acumen;
    readonly wedding_resource_boost_alliance: AresArmy;
    readonly unit_order_cost_alliance: UnitOrderOstAlliance;
    readonly unit_attack_defense_boost_alliance: AttackBoost;
    readonly call_ocean_boost_alliance: AttackTypeBoostAlliance;
    readonly huntress_aim_boost_alliance: AresSacrifice;
    readonly return_underworld_boost_alliance: AttackTypeBoostAlliance;
    readonly ares_sacrifice_boost_alliance: AresSacrificeBoostAlliance;
    readonly charitable_festival_boost_alliance: AresSacrificeBoostAlliance;
    readonly mythical_unit_favor_cost_boost_alliance: AresArmy;
    readonly portal_to_olympus_alliance: AresSacrificeBoostAlliance;
}

export interface ANewHope {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: EffectElement[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: ANewHopeMetaDefaults | null;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export enum AreaOfEffect {
    AreaOfEffectBuildTime = "area_of_effect_build_time",
    AreaOfEffectFavor = "area_of_effect_favor",
    AreaOfEffectResources = "area_of_effect_resources",
}

export enum EffectElement {
    EffectsGround = "effects_ground",
    EffectsNaval = "effects_naval",
}

export interface Images {
    readonly mini: string;
    readonly small: string;
    readonly medium: string;
    readonly large: string;
}

export interface ANewHopeMetaDefaults {
    readonly percent?: number;
    readonly lifetime?: number;
    readonly attack_modifier?: number;
    readonly defense_modifier?: number;
    readonly amount?: number;
    readonly cf_on?: MetaField;
    readonly mission_units?: MissionUnits;
    readonly type?: MetaDefaultsTypeEnum;
}

export enum MetaField {
    Amount = "amount",
    Category = "category",
    Lifetime = "lifetime",
    Percent = "percent",
    Type = "type",
}

export interface MissionUnits {
    readonly dryads: number;
}

export enum MetaDefaultsTypeEnum {
    CoinsOfWar = "coins_of_war",
    CoinsOfWisdom = "coins_of_wisdom",
    Iron = "iron",
    Stone = "stone",
    Wood = "wood",
}

export enum SeedsTo {
    TargetAlliance = "target_alliance",
    TargetCommand = "target_command",
    TargetPlayer = "target_player",
    TargetSupportCommand = "target_support_command",
    TargetTown = "target_town",
}

export interface Acumen {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly short_effect: null | string;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: AcumenPowerGroup;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: EffectElement[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: string[];
    readonly meta_defaults: AcumenMetaDefaults | null;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: string[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface AcumenMetaDefaults {
    readonly lifetime?: number;
    readonly factor?: number;
    readonly min_percent?: number;
    readonly max_percent?: number;
    readonly percent?: number;
    readonly cf_on?: CFOn;
    readonly amount?: number;
    readonly type?: string;
    readonly limit?: Limit;
    readonly progress?: Limit;
    readonly percent_production?: number;
    readonly percent_recruitment?: number;
    readonly effect_runtime_hours?: number;
}

export enum CFOn {
    Lifetime = "lifetime",
    Limit = "limit",
}

export interface Limit {
    readonly battlepoints: number;
}

export enum AcumenPowerGroup {
    AttackBoostGroup = "attack_boost_group",
    BattlePointBoostGroup = "battle_point_boost_group",
    BuildingBoostGroup = "building_boost_group",
    DefenseBoostGroup = "defense_boost_group",
    Empty = "",
}

export interface AresArmy {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly short_effect: null | string;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: EffectElement[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: string[];
    readonly meta_defaults: AresArmyMetaDefaults | null;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: string[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface AresArmyMetaDefaults {
    readonly type?: string;
    readonly amount?: number;
    readonly campaign_units?: MetaDefaultsElement[];
    readonly ingredients?: MetaDefaultsElement[];
    readonly level_up?: number;
    readonly exact?: boolean;
    readonly lifetime?: number;
    readonly factor?: number;
    readonly percent?: number;
    readonly cf_on?: CFOn;
    readonly limit?: Limit;
    readonly progress?: Limit;
}

export interface MetaDefaultsElement {
    readonly type: string;
    readonly amount: number;
}

export interface AresRage {
    readonly effect: AresRageEffectClass;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: EffectElement[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: string[];
    readonly meta_defaults: AresRageMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface AresRageEffectClass {
    readonly type: PurpleType;
}

export interface PurpleType {
    readonly not_cast: string;
    readonly cast: string;
}

export interface AresRageMetaDefaults {
    readonly percent?: number;
    readonly level_increases: MetaField;
    readonly level_increases_decimals: number;
    readonly level: number;
    readonly type: string;
    readonly amount?: number;
}

export interface AresSacrifice {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly short_effect: null | string;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: string[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: AcumenPowerGroup;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: string[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: string[];
    readonly meta_defaults: AresSacrificeMetaDefaults | null;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface AresSacrificeMetaDefaults {
    readonly amount?: number;
    readonly percent?: number;
    readonly lifetime?: number;
    readonly cf_on?: CFOn;
    readonly type?: string;
    readonly limit?: Limit;
    readonly progress?: Limit;
    readonly claim_percent?: number;
    readonly trade_percent?: number;
    readonly wall_bonus?: number;
    readonly militia_bonus?: number;
    readonly farm_level_cap?: number;
}

export interface AresSacrificeBoostAlliance {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: AresSacrificeBoostAllianceMetaDefaults | null;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface AresSacrificeBoostAllianceMetaDefaults {
    readonly percent?: number;
    readonly lifetime?: number;
    readonly cf_on?: MetaField;
    readonly type?: number | string;
    readonly amount?: number;
}

export interface AttackBoost {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: AttackBoostPowerGroup;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: EffectElement[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: string[];
    readonly meta_defaults: AttackBoostMetaDefaults | null;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface AttackBoostMetaDefaults {
    readonly percent?: number;
    readonly lifetime?: number;
    readonly cf_on?: MetaField;
    readonly amount?: number;
    readonly type?: string;
    readonly attack_percent?: number;
    readonly defense_percent?: number;
}

export enum AttackBoostPowerGroup {
    AttackBoostGroup = "attack_boost_group",
    AttackShipAttackBoostGroup = "attack_ship_attack_boost_group",
    Empty = "",
    UnitBoostGroup = "unit_boost_group",
}

export interface AttackBoostAlliance {
    readonly effect: AttackBoostAllianceDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: AttackBoostAllianceDescription;
    readonly description: AttackBoostAllianceDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: AcumenPowerGroup;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface AttackBoostAllianceDescription {
    readonly type: FluffyType;
}

export interface FluffyType {
    readonly all: string;
    readonly naval: string;
    readonly ground: string;
    readonly regular_ground: string;
    readonly "all|flying": string;
}

export interface AttackBoostAllianceMetaDefaults {
    readonly type: string;
    readonly percent: number;
}

export interface AttackDefenseBoostAlliance {
    readonly effect: AttackDefenseBoostAllianceDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: AttackDefenseBoostAllianceDescription;
    readonly description: AttackDefenseBoostAllianceDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: AcumenPowerGroup;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: string[];
    readonly meta_defaults: AttackDefenseBoostAllianceMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface AttackDefenseBoostAllianceDescription {
    readonly type: TentacledType;
}

export interface TentacledType {
    readonly naval: string;
    readonly regular: string;
}

export interface AttackDefenseBoostAllianceMetaDefaults {
    readonly type: string;
    readonly percent: number;
    readonly god: string;
}

export interface AttackTypeBoostAlliance {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: EffectElement[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: string[];
    readonly meta_defaults: AttackTypeBoostAllianceMetaDefaults | null;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface AttackTypeBoostAllianceMetaDefaults {
    readonly type?: string;
    readonly percent?: number;
    readonly lifetime?: number;
    readonly level?: number;
    readonly amount?: number;
    readonly cf_on?: MetaField;
    readonly recruit_percent?: number;
}

export interface CitySkin {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: CitySkinDescription;
    readonly description: CitySkinDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: CitySkinMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface CitySkinDescription {
    readonly type: StickyType;
}

export interface StickyType {
    readonly fleet_port: string;
    readonly hades: string;
    readonly high_temple: string;
    readonly protectress: string;
}

export interface CitySkinMetaDefaults {
    readonly type: string;
}

export interface Crafting {
    readonly effect: CraftingIngredientsBoostDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: CraftingIngredientsBoostDescription;
    readonly description: CraftingIngredientsBoostDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: CraftingIngredientsBoostMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface CraftingIngredientsBoostDescription {
    readonly type: IndigoType;
}

export interface IndigoType {
    readonly easter_skin_demeter: string;
    readonly easter_skin_incantation: string;
    readonly easter_skin_easter_hen: string;
}

export interface CraftingIngredientsBoostMetaDefaults {
    readonly lifetime: number;
    readonly type: string;
}

export interface DefenseBoostAlliance {
    readonly effect: DefenseBoostAllianceDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: DefenseBoostAllianceDescription;
    readonly description: DefenseBoostAllianceDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: AcumenPowerGroup;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface DefenseBoostAllianceDescription {
    readonly type: IndecentType;
}

export interface IndecentType {
    readonly all: string;
    readonly naval: string;
}

export interface FavorBoostAlliance {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: FavorBoostAllianceName;
    readonly description: string;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: string[];
    readonly meta_defaults: FavorBoostAllianceMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface FavorBoostAllianceMetaDefaults {
    readonly percent: number;
    readonly god: string;
}

export interface FavorBoostAllianceName {
    readonly god: PurpleGod;
}

export interface PurpleGod {
    readonly athena: string;
}

export interface GrepolympiaAthleteBoost {
    readonly effect: GrepolympiaAthleteBoostDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: GrepolympiaAthleteBoostDescription;
    readonly description: GrepolympiaAthleteBoostDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: CraftingIngredientsBoostMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface GrepolympiaAthleteBoostDescription {
    readonly type: HilariousType;
}

export interface HilariousType {
    readonly grepolympia_summer: string;
    readonly grepolympia_winter: string;
    readonly grepolympia_worldcup: string;
}

export interface GrepolympiaChampionship1 {
    readonly effect: GrepolympiaAthleteBoostDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: GrepolympiaAthleteBoostDescription;
    readonly description: GrepolympiaAthleteBoostDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: EffectElement[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: GrepolympiaChampionship1_MetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface GrepolympiaChampionship1_MetaDefaults {
    readonly percent?: number;
    readonly lifetime?: number;
    readonly cf_on?: MetaField;
    readonly type?: string;
    readonly category?: string;
    readonly amount?: number;
    readonly level?: number;
}

export interface GridEventAdvancedScouts {
    readonly effect: GridEventAdvancedScoutsDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: GridEventAdvancedScoutsDescription;
    readonly description: GridEventAdvancedScoutsDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: CraftingIngredientsBoostMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface GridEventAdvancedScoutsDescription {
    readonly type: AmbitiousType;
}

export interface AmbitiousType {
    readonly battleships: string;
    readonly gods_gifts: string;
}

export interface HeroicPowerBoostAlliance {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: HeroicPowerBoostAllianceDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: AcumenPowerGroup;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface HeroicPowerBoostAllianceDescription {
    readonly type: CunningType;
}

export interface CunningType {
    readonly all: string;
    readonly naval: string;
    readonly ground: string;
    readonly "regular_naval#bireme"?: string;
}

export interface InstantCurrency {
    readonly effect: InstantCurrencyDescription;
    readonly lifetime: number;
    readonly id: InstantCurrencyID;
    readonly name: InstantCurrencyDescription;
    readonly description: InstantCurrencyDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: MetaDefaultsElement;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: DisplayAmount;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface InstantCurrencyDescription {
    readonly type: PositionClass;
}

export interface PositionClass {
    readonly coins_of_war: string;
    readonly coins_of_wisdom: string;
    readonly coins_of_both: string;
    readonly battle_tokens: string;
    readonly laurels: string;
    readonly grid_battleships: string;
    readonly grid_gods_gifts: string;
    readonly grid_progression: string;
    readonly rota_tyche_coins: string;
}

export interface DisplayAmount {
    readonly type: MagentaType;
    readonly position: PositionClass;
}

export interface MagentaType {
    readonly coins_of_war: boolean;
    readonly coins_of_wisdom: boolean;
    readonly coins_of_both: boolean;
    readonly battle_tokens: boolean;
    readonly laurels: boolean;
    readonly grid_battleships: boolean;
    readonly grid_gods_gifts: boolean;
    readonly grid_progression: boolean;
    readonly rota_tyche_coins: boolean;
}

export enum InstantCurrencyID {
    InstantCurrency = "instant_currency",
    UnitTrainingBoost = "unit_training_boost",
}

export interface InstantCurrencyCRM {
    readonly effect: InstantCurrencyDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: InstantCurrencyDescription;
    readonly description: InstantCurrencyDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: InstantCurrencyCRMMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface InstantCurrencyCRMMetaDefaults {
    readonly amount?: number;
    readonly type?: string;
    readonly cf_on?: MetaField;
    readonly lifetime?: number;
    readonly level?: number;
    readonly percent?: number;
}

export interface InstantResources {
    readonly effect: NameClass;
    readonly lifetime: number;
    readonly id: string;
    readonly name: NameClass;
    readonly description: string;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: InstantCurrencyCRMMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface NameClass {
    readonly type: ResourceNames;
}

export interface ResourceNames {
    readonly wood: string;
    readonly stone: string;
    readonly iron: string;
    readonly all?: string;
}

export interface LongtermResourceBoost {
    readonly effect: NameClass;
    readonly lifetime: number;
    readonly id: string;
    readonly name: NameClass;
    readonly description: NameClass;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: GrepolympiaChampionship1_MetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface LongtermUnitOrderPenalty {
    readonly effect: LongtermUnitOrderPenaltyDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: LongtermUnitOrderPenaltyDescription;
    readonly description: LongtermUnitOrderPenaltyDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: GrepolympiaChampionship1_MetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface LongtermUnitOrderPenaltyDescription {
    readonly type: FriskyType;
}

export interface FriskyType {
    readonly earthquake: string;
    readonly pest: string;
}

export interface MissionsPower1_Class {
    readonly effect: MissionsPower1_Description;
    readonly lifetime: number;
    readonly id: string;
    readonly name: MissionsPower1_Description;
    readonly description: MissionsPower1_Description;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: GrepolympiaChampionship1_MetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface MissionsPower1_Description {
    readonly type: MischievousType;
}

export interface MischievousType {
    readonly missionsskinpandora: string;
    readonly missions_dionysia: string;
}

export interface PopulationBoost {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: PopulationBoostName;
    readonly description: string;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: MetaDefaultsElement;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface PopulationBoostName {
    readonly type: BraggadociousType;
}

export interface BraggadociousType {
    readonly small: string;
    readonly big: string;
    readonly ultra: string;
}

export interface PopulationBoostAlliance {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: PopulationBoostAllianceName;
    readonly description: string;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: string[];
    readonly meta_defaults: PopulationBoostAllianceMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface PopulationBoostAllianceMetaDefaults {
    readonly amount: number;
    readonly god: string;
}

export interface PopulationBoostAllianceName {
    readonly god: FluffyGod;
}

export interface FluffyGod {
    readonly aphrodite: string;
    readonly ares: string;
    readonly artemis: string;
    readonly athena: string;
    readonly hades: string;
    readonly hera: string;
    readonly poseidon: string;
    readonly zeus: string;
}

export interface ResourceBoost {
    readonly effect: NameClass;
    readonly lifetime: number;
    readonly id: ResourceBoostID;
    readonly name: NameClass;
    readonly description: string;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: GrepolympiaChampionship1_MetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export enum ResourceBoostID {
    InstantCurrency = "instant_currency",
    ResourceBoost = "resource_boost",
}

export interface ResourceBoostAlliance {
    readonly effect: NameClass;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: NameClass;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: AreaOfEffect[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface RotaEventTychesWreath {
    readonly effect: RotaEventTychesWreathDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: RotaEventTychesWreathDescription;
    readonly description: RotaEventTychesWreathDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: CraftingIngredientsBoostMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface RotaEventTychesWreathDescription {
    readonly type: Type1;
}

export interface Type1 {
    readonly spring: string;
    readonly epic_battle: string;
}

export interface UnitMovementBoostAlliance {
    readonly effect: string;
    readonly lifetime: number;
    readonly id: string;
    readonly name: UnitMovementBoostAllianceDescription;
    readonly description: UnitMovementBoostAllianceDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: SeedsTo[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface UnitMovementBoostAllianceDescription {
    readonly type: Type2;
}

export interface Type2 {
    readonly all: string;
    readonly "regular_naval|colonization#colonize_ship": string;
}

export interface UnitOrderOstAlliance {
    readonly effect: HeroicPowerBoostAllianceDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: HeroicPowerBoostAllianceDescription;
    readonly description: HeroicPowerBoostAllianceDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: AttackBoostPowerGroup;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface UnitOrderBoostAllianceHera {
    readonly effect: HeroicPowerBoostAllianceDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: string;
    readonly description: HeroicPowerBoostAllianceDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: AttackBoostPowerGroup;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface WheelFreeRefill {
    readonly effect: WheelFreeRefillDescription;
    readonly lifetime: number;
    readonly id: string;
    readonly name: WheelFreeRefillDescription;
    readonly description: WheelFreeRefillDescription;
    readonly short_effect: null;
    readonly favor: number;
    readonly fury_percentage_cost: number;
    readonly god_id: null;
    readonly temple_level_sum_dependency: null;
    readonly targets: SeedsTo[];
    readonly only_own_towns: boolean;
    readonly boost: boolean;
    readonly is_fake_power: boolean;
    readonly area_of_effect: any[];
    readonly destructive: boolean;
    readonly negative: boolean;
    readonly extendible: boolean;
    readonly power_group: string;
    readonly power_group_level: number;
    readonly seeds_to: any[];
    readonly images: Images;
    readonly effects: any[];
    readonly is_valid_for_happenings: boolean;
    readonly meta_fields: MetaField[];
    readonly meta_defaults: CraftingIngredientsBoostMetaDefaults;
    readonly removed_on_target_loss: boolean;
    readonly needs_level: boolean;
    readonly requires_god: boolean;
    readonly ignores_democritus: boolean;
    readonly display_amount: boolean;
    readonly wasteable: boolean;
    readonly is_ritual: boolean;
    readonly recreate_on_restart: boolean;
    readonly transfer_to_casual_world: boolean;
    readonly is_onetime_power: boolean;
    readonly is_upgradable: boolean;
    readonly is_capped: boolean;
    readonly compatible_powers: any[];
    readonly no_lifetime: boolean;
    readonly passive: boolean;
}

export interface WheelFreeRefillDescription {
    readonly type: Type3;
}

export interface Type3 {
    readonly nwot: string;
}

export interface Progressable {
    readonly StartTutorialQuest: AssignHeroQuest;
    readonly BuildStonerQuest: AssignHeroQuest;
    readonly BuildFarmQuest: BuildFarmQuestClass;
    readonly BuildLumberMinorQuest: AssignHeroQuest;
    readonly BuildIronerQuest: AssignHeroQuest;
    readonly BuildStorageQuest: AssignHeroQuest;
    readonly ImproveBuildTimeQuest: AssignHeroQuest;
    readonly BuildFarmMinorQuest: BuildFarmMinorQuest;
    readonly BuildBarracksQuest: BuildBarracksQuest;
    readonly RenameTownQuest: TownQuest;
    readonly ClaimLoadQuest: ClaimLoadQuest;
    readonly ConquerFarmQuest: BuildFarmQuestClass;
    readonly RecruitSwordsmanQuest: ConquerFarmMinorQuestClass;
    readonly ConquerFarmMinorQuest: ConquerFarmMinorQuestClass;
    readonly ConquerFarmMajorQuest: ConquerFarmMajorQuest;
    readonly PremiumCaptainQuest: ConquerFarmVillage4;
    readonly ClaimLoadPremiumQuest: AssignHeroQuest;
    readonly ConquerFarmVillage4: ConquerFarmVillage4;
    readonly BuildResourcesMinorQuest: AssignHeroQuest;
    readonly BuildStorageMinorQuest: RQuest;
    readonly BuildMarketQuest: AssignHeroQuest;
    readonly TradeFarmQuest: AssignHeroQuest;
    readonly TradePlayerQuest: AssignHeroQuest;
    readonly BuildResourcesMajorQuest: RQuest;
    readonly BuildStorageMajorQuest: AssignHeroQuest;
    readonly PremiumTraderQuest: RQuest;
    readonly ConfirmEmailQuest: ConfirmEmailQuest;
    readonly BuildMainMinorQuest: AssignHeroQuest;
    readonly PremiumCuratorQuest: AssignHeroQuest;
    readonly BuildMainMajorQuest: AssignHeroQuest;
    readonly BuildSpecialBuildingQuest: AssignHeroQuest;
    readonly JoinAllianceQuest: JoinAllianceQuest;
    readonly RecruitSwordsmanMinorQuest: ConquerFarmMinorQuestClass;
    readonly BuildWallQuest: AssignHeroQuest;
    readonly BuildTempleQuest: AssignHeroQuest;
    readonly ChooseGodQuest: BuildTempleMinorQuestClass;
    readonly CastPowerQuest: BuildTempleMinorQuestClass;
    readonly RecruitGodsentQuest: BuildTempleMinorQuestClass;
    readonly BuildTempleMinorQuest: BuildTempleMinorQuestClass;
    readonly PremiumPriestQuest: BuildTempleMinorQuestClass;
    readonly InviteFriendQuest: AssignHeroQuest;
    readonly BuildAcademyQuest: AssignHeroQuest;
    readonly ResearchSlingerQuest: AssignHeroQuest;
    readonly RecruitSlingerQuest: BuildFarmQuestClass;
    readonly AttackTownQuest: TownQuest;
    readonly RecruitSlingerMinorQuest: ConquerFarmVillage4;
    readonly WinAttackQuest: ConquerFarmVillage4;
    readonly LootResourcesQuest: ConquerFarmVillage4;
    readonly PremiumCommanderQuest: BuildFarmQuestClass;
    readonly BuildHideQuest: AssignHeroQuest;
    readonly StoreIronQuest: StoreIronQuest;
    readonly BuildDocksQuest: BuildDocksQuestClass;
    readonly TradeSalesmanQuest: BuildDocksQuestClass;
    readonly ResearchBiremeQuest: RecruitBiremeQuestClass;
    readonly RecruitBiremeQuest: RecruitBiremeQuestClass;
    readonly ColonizeShipQuest: BuildDocksQuestClass;
    readonly EarlierColonizeShipQuest: App2BrowserQuest;
    readonly FoundTownQuest: FoundTownQuest;
    readonly ConquerTownQuest: ConquerTownQuest;
    readonly BuildAcademyMinorQuest: AssignHeroQuest;
    readonly CelebrateGamesQuest: AssignHeroQuest;
    readonly CelebratePartyQuest: CelebrateQuest;
    readonly RecruitSmallTransporterQuest: RecruitSmallTransporterQuest;
    readonly RecruitAttackShipQuest: RecruitAttackShipQuest;
    readonly WinAttackOverseaQuest: RecruitBiremeQuestClass;
    readonly CelebrateTriumphQuest: CelebrateQuest;
    readonly AssignHeroQuest: AssignHeroQuest;
    readonly TrainHeroQuest: AssignHeroQuest;
    readonly FinishIslandQuestWithHero: CareForTheWoundedEvilIslandQuest;
    readonly FinishIslandQuestWithoutHero: AssignHeroQuest;
    readonly SetPlayernameAsGuestQuest: SetPlayernameAsGuestQuest;
    readonly RegisterAsGuestQuest: AssignHeroQuest;
    readonly Browser2AppQuest: Browser2AppQuest;
    readonly App2BrowserQuest: App2BrowserQuest;
    readonly FirstAttackSpotQuest: AssignHeroQuest;
    readonly BuildFarmingVillage1Quest: AssignHeroQuest;
    readonly DemandResourcesBPVQuest: BuildFarmQuestClass;
    readonly UpgradeFarmingVillage2Quest: AssignHeroQuest;
    readonly Win10AttackSpotFightsQuest: Win10AttackSpotFightsQuest;
    readonly Win25AttackSpotFightsQuest: Win25AttackSpotFightsQuestClass;
    readonly Win50AttackSpotFightsQuest: Win25AttackSpotFightsQuestClass;
    readonly Win75AttackSpotFightsQuest: Win100AttackSpotFightsQuestClass;
    readonly Win100AttackSpotFightsQuest: Win100AttackSpotFightsQuestClass;
    readonly BuildAcademyLevel10: AssignHeroQuest;
    readonly BuildAcademyLevel5: AssignHeroQuest;
    readonly BuildBarracksLevel3: AssignHeroQuest;
    readonly BuildBarracksLevel5: AssignHeroQuest;
    readonly BuildCaveLevel10: AssignHeroQuest;
    readonly BuildCaveLevel5: AssignHeroQuest;
    readonly BuildDocksLevel10: AssignHeroQuest;
    readonly BuildDocksLevel5: AssignHeroQuest;
    readonly BuildFarmLevel12: AssignHeroQuest;
    readonly BuildFarmLevel5: AssignHeroQuest;
    readonly BuildFarmLevel8: AssignHeroQuest;
    readonly BuildIronerLevel12: AssignHeroQuest;
    readonly BuildIronerLevel2: AssignHeroQuest;
    readonly BuildIronerLevel3: AssignHeroQuest;
    readonly BuildIronerLevel5: AssignHeroQuest;
    readonly BuildIronerLevel8: AssignHeroQuest;
    readonly BuildLumberLevel12: AssignHeroQuest;
    readonly BuildLumberLevel3: AssignHeroQuest;
    readonly BuildLumberLevel5: AssignHeroQuest;
    readonly BuildLumberLevel8: AssignHeroQuest;
    readonly BuildMarketLevel3: AssignHeroQuest;
    readonly BuildMarketLevel5: AssignHeroQuest;
    readonly BuildMainLevel12: AssignHeroQuest;
    readonly BuildMainLevel3: AssignHeroQuest;
    readonly BuildStonerLevel12: AssignHeroQuest;
    readonly BuildStonerLevel2: AssignHeroQuest;
    readonly BuildStonerLevel3: AssignHeroQuest;
    readonly BuildStonerLevel5: AssignHeroQuest;
    readonly BuildStonerLevel8: AssignHeroQuest;
    readonly BuildStorageLevel12: AssignHeroQuest;
    readonly BuildTempleLevel5: AssignHeroQuest;
    readonly BuildTempleLevel8: AssignHeroQuest;
    readonly BuildMainLevel21Quest: App2BrowserQuest;
    readonly BuildMainLevel24Quest: App2BrowserQuest;
    readonly BuildSpecialBuildingQuest2: App2BrowserQuest;
    readonly BuildFarmLevel30Quest: App2BrowserQuest;
    readonly BuildFarmLevel45Quest: App2BrowserQuest;
    readonly BuildLumberLevel25Quest: App2BrowserQuest;
    readonly BuildLumberLevel40Quest: App2BrowserQuest;
    readonly BuildIronerLevel25Quest: App2BrowserQuest;
    readonly BuildIronerLevel40Quest: App2BrowserQuest;
    readonly BuildStonerLevel25Quest: App2BrowserQuest;
    readonly BuildStonerLevel40Quest: App2BrowserQuest;
    readonly BuildStorageLevel25Quest: App2BrowserQuest;
    readonly BuildStorageLevel35Quest: App2BrowserQuest;
    readonly BuildTempleLevel20Quest: App2BrowserQuest;
    readonly BuildTempleLevel30Quest: App2BrowserQuest;
    readonly BuildDocksLevel30Quest: App2BrowserQuest;
    readonly BuildBarracksLevel20Quest: App2BrowserQuest;
    readonly BuildBarracksLevel30Quest: App2BrowserQuest;
    readonly BuildWallLevel15Quest: App2BrowserQuest;
    readonly BuildWallLevel25Quest: App2BrowserQuest;
    readonly BuildAcademyLevel34Quest: App2BrowserQuest;
    readonly RecruitLandDefenseMediumQuest: App2BrowserQuest;
    readonly RecruitLandDefenseLargeQuest: App2BrowserQuest;
    readonly RecruitLandDefenseMaximumQuest: App2BrowserQuest;
    readonly RecruitLandOffensiveMediumQuest: App2BrowserQuest;
    readonly RecruitLandOffensiveLargeQuest: App2BrowserQuest;
    readonly RecruitLandOffensiveMaximumQuest: App2BrowserQuest;
    readonly RecruitShipDefenseMediumQuest: App2BrowserQuest;
    readonly RecruitShipDefenseLargeQuest: App2BrowserQuest;
    readonly RecruitShipDefenseMaximumQuest: App2BrowserQuest;
    readonly RecruitShipOffensiveMediumQuest: App2BrowserQuest;
    readonly RecruitShipOffensiveLargeQuest: App2BrowserQuest;
    readonly RecruitShipOffensiveMaximumQuest: App2BrowserQuest;
    readonly RecruitFlyerMediumQuest: App2BrowserQuest;
    readonly RecruitFlyerLargeQuest: App2BrowserQuest;
    readonly RecruitFlyerMaximumQuest: App2BrowserQuest;
    readonly AllJustAnExploitGoodIslandQuest: AllJustAnExploitGoodIslandQuestClass;
    readonly AllJustAnExploitEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly CampOfTheDesperateGoodIslandQuest: CampOfTheDesperateGoodIslandQuestClass;
    readonly CampOfTheDesperateEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly ChildOfTheGodsGoodIslandQuest: CelebrationsOfARulerGoodIslandQuestClass;
    readonly ChildOfTheGodsEvilIslandQuest: CelebrationsOfARulerEvilIslandQuestClass;
    readonly TheDestroyedShrineGoodIslandQuest: RiddanceOfThePoorEvilIslandQuestClass;
    readonly TheDestroyedShrineEvilIslandQuest: CampOfTheDesperateGoodIslandQuestClass;
    readonly TheDesperateVillageEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly TheDesperateVillageGoodIslandQuest: AllJustAnExploitGoodIslandQuestClass;
    readonly TheLonePilgrimEvilIslandQuest: CelebrationsOfARulerEvilIslandQuestClass;
    readonly TheLonePilgrimGoodIslandQuest: CelebrationsOfARulerGoodIslandQuestClass;
    readonly CaravanWithoutProtectionEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly CaravanWithoutProtectionGoodIslandQuest: AllJustAnExploitGoodIslandQuestClass;
    readonly TheStrandedCaptainEvilIslandQuest: HeroOfThePopulaceEvilIslandQuestClass;
    readonly TheStrandedCaptainGoodIslandQuest: AllJustAnExploitGoodIslandQuestClass;
    readonly TheTournamentOfTheChariotsEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly TheTournamentOfTheChariotsGoodIslandQuest: RiddanceOfThePoorEvilIslandQuestClass;
    readonly RefugeesOrPreyEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly RefugeesOrPreyGoodIslandQuest: AllJustAnExploitGoodIslandQuestClass;
    readonly HeroOfThePopulaceEvilIslandQuest: HeroOfThePopulaceEvilIslandQuestClass;
    readonly HeroOfThePopulaceGoodIslandQuest: CrusadeGoodIslandQuestClass;
    readonly CelebrationsOfARulerEvilIslandQuest: CelebrationsOfARulerEvilIslandQuestClass;
    readonly CelebrationsOfARulerGoodIslandQuest: CelebrationsOfARulerGoodIslandQuestClass;
    readonly IntrigueOfMerchantsEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly IntrigueOfMerchantsGoodIslandQuest: AllJustAnExploitGoodIslandQuestClass;
    readonly TheBrothelEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly TheBrothelGoodIslandQuest: CelebrationsOfARulerGoodIslandQuestClass;
    readonly TheEpidemicPlagueEvilIslandQuest: RiddanceOfThePoorEvilIslandQuestClass;
    readonly TheEpidemicPlagueGoodIslandQuest: CelebrationsOfARulerGoodIslandQuestClass;
    readonly TearOffThePastEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly TearOffThePastGoodIslandQuest: CelebrationsOfARulerGoodIslandQuestClass;
    readonly CrusadeEvilIslandQuest: CelebrationsOfARulerGoodIslandQuestClass;
    readonly CrusadeGoodIslandQuest: CrusadeGoodIslandQuestClass;
    readonly HolyHauntedForestEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly HolyHauntedForestGoodIslandQuest: AllJustAnExploitGoodIslandQuestClass;
    readonly QuestionOfMathematicsEvilIslandQuest: AllJustAnExploitGoodIslandQuestClass;
    readonly QuestionOfMathematicsGoodIslandQuest: CrusadeGoodIslandQuestClass;
    readonly RiddanceOfThePoorEvilIslandQuest: RiddanceOfThePoorEvilIslandQuestClass;
    readonly RiddanceOfThePoorGoodIslandQuest: CampOfTheDesperateGoodIslandQuestClass;
    readonly ThreatFromOutsideEvilIslandQuest: CrusadeGoodIslandQuestClass;
    readonly ThreatFromOutsideGoodIslandQuest: CelebrationsOfARulerEvilIslandQuestClass;
    readonly LeonidasPleaEvilIslandQuest: CareForTheWoundedEvilIslandQuest;
    readonly ReinforcementOfSpartaEvilIslandQuest: CelebrationsOfARulerGoodIslandQuestClass;
    readonly BuildingTheDefenseLineEvilIslandQuest: AllJustAnExploitGoodIslandQuestClass;
    readonly FirstWaveEvilIslandQuest: DefeatThePersiansEvilIslandQuestClass;
    readonly DistractionEvilIslandQuest: DistractionEvilIslandQuest;
    readonly DefeatThePersiansEvilIslandQuest: DefeatThePersiansEvilIslandQuestClass;
    readonly CareForTheWoundedEvilIslandQuest: CareForTheWoundedEvilIslandQuest;
    readonly PromisingMessageGoodIslandQuest: GoodIslandQuest;
    readonly LastPreparationsGoodIslandQuest: CareForTheWoundedEvilIslandQuest;
    readonly LetTheCelebrationBeginGoodIslandQuest: CelebrationsOfARulerGoodIslandQuestClass;
    readonly AvowalsGoodIslandQuest: GoodIslandQuest;
    readonly OwingGratitudeGoodIslandQuest: CareForTheWoundedEvilIslandQuest;
    readonly CastSpellsTask: Task;
    readonly FinishBuildingsTask: Task;
    readonly FinishTechnologiesTask: Task;
    readonly CompleteIslandQuestsTask: Task;
    readonly CompleteUnitsRecruitmentTask: Task;
    readonly StoreSilverTask: Task;
    readonly CollectResourceFromVillageTask: Task;
}

export interface AllJustAnExploitEvilIslandQuestClass {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: string;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: AllJustAnExploitEvilIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: string;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: Side;
    readonly challenge_type: string;
}

export interface AllJustAnExploitEvilIslandQuestReward {
    readonly type: Type4;
    readonly data: PurpleData;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: InstantCurrencyID;
    readonly configuration: PurpleConfiguration;
}

export interface PurpleConfiguration {
    readonly type?: string;
    readonly amount?: number;
    readonly level?: number;
    readonly lifetime?: number;
    readonly cf_on?: MetaField;
}

export interface PurpleData {
    readonly instant_currency?: number;
    readonly unit_training_boost?: number;
}

export enum Type4 {
    Power = "power",
}

export enum Side {
    Evil = "evil",
}

export interface AllJustAnExploitEvilIslandQuestTask {
    readonly description: string;
    readonly image_class: ImageClass;
}

export interface ImageClass {
    readonly type: ImageClassType;
    readonly name: string;
}

export enum ImageClassType {
    Adviser = "adviser",
    Building = "building",
    Celebrate = "celebrate",
    Common = "common",
    Email = "email",
    Farm = "farm",
    Heroes = "heroes",
    Research = "research",
    Town = "town",
    Unit = "unit",
}

export enum AllJustAnExploitEvilIslandQuestType {
    IslandQuest = "island_quest",
}

export interface AllJustAnExploitGoodIslandQuestClass {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null | string;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: AllJustAnExploitGoodIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null | string;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null | string;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: string;
    readonly challenge_type: string;
}

export interface AllJustAnExploitGoodIslandQuestReward {
    readonly type: Type4;
    readonly data: FluffyData;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: ResourceBoostID;
    readonly configuration: FluffyConfiguration;
}

export interface FluffyConfiguration {
    readonly type?: MetaDefaultsTypeEnum;
    readonly amount?: number;
    readonly level?: number;
    readonly percent?: number;
    readonly lifetime?: number;
}

export interface FluffyData {
    readonly instant_currency?: number;
    readonly resource_boost?: number;
}

export interface App2BrowserQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: App2BrowserQuestReward[];
    readonly questline: Questline;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export enum Questline {
    Armeespezialisierung = "Armeespezialisierung",
    Gebäudeausbau = "Gebäudeausbau",
    ZumBrowser = "Zum Browser",
    ÜberDenTellerrand = "Über den Tellerrand",
}

export enum Questtype {
    Blue = "blue",
    Green = "green",
    Red = "red",
    Yellow = "yellow",
}

export interface App2BrowserQuestReward {
    readonly type: Type5;
    readonly data: TentacledData;
    readonly stashable: boolean;
}

export interface TentacledData {
    readonly amount: number;
}

export enum Type5 {
    Gold = "gold",
    Resources = "resources",
}

export enum App2BrowserQuestType {
    Quest = "quest",
}

export interface AssignHeroQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: AssignHeroQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null | string;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface AssignHeroQuestReward {
    readonly type: Type5;
    readonly data: Resources;
    readonly stashable: boolean;
}

export interface TownQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: AttackTownQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface AttackTownQuestReward {
    readonly type: string;
    readonly data: StickyData;
    readonly stashable: boolean;
}

export interface StickyData {
    readonly hoplite: number;
}

export interface GoodIslandQuest {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: AvowalsGoodIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null | string;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: string;
    readonly challenge_type: string;
}

export interface AvowalsGoodIslandQuestReward {
    readonly type: Type4;
    readonly data: IndigoData;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: PurpleConfiguration;
}

export interface IndigoData {
    readonly instant_currency?: number;
    readonly forced_loyalty?: number;
}

export interface Browser2AppQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: Browser2AppQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: App2BrowserQuestReward[];
    readonly questline: Questline;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface Browser2AppQuestTask {
    readonly description: string;
    readonly short_description: string;
    readonly image_class: ImageClass;
}

export interface BuildBarracksQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: BuildBarracksQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface BuildBarracksQuestReward {
    readonly type: Type4;
    readonly data: IndecentData;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: GrepolympiaChampionship1_MetaDefaults;
}

export interface IndecentData {
    readonly unit_order_boost: number;
}

export interface BuildDocksQuestClass {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: BuildDocksQuestReward[];
    readonly questline: Questline;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface BuildDocksQuestReward {
    readonly type: string;
    readonly data: HilariousData;
    readonly stashable: boolean;
}

export interface HilariousData {
    readonly big_transporter: number;
}

export interface BuildFarmMinorQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: BuildFarmMinorQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface BuildFarmMinorQuestReward {
    readonly type: Type4;
    readonly data: AmbitiousData;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: MetaDefaultsElement;
}

export interface AmbitiousData {
    readonly population_boost: number;
}

export interface BuildFarmQuestClass {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: BuildFarmQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface BuildFarmQuestReward {
    readonly type: string;
    readonly data: CunningData;
    readonly stashable: boolean;
}

export interface CunningData {
    readonly slinger: number;
}

export interface RQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: BuildResourcesMajorQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface BuildResourcesMajorQuestReward {
    readonly type: Type4;
    readonly data: MagentaData;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: any[];
}

export interface MagentaData {
    readonly happiness: number;
}

export interface BuildTempleMinorQuestClass {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: BuildTempleMinorQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface BuildTempleMinorQuestReward {
    readonly type: string;
    readonly god_name: string;
    readonly data: FriskyData;
    readonly stashable: boolean;
}

export interface FriskyData {
    readonly favor: number;
}

export interface CampOfTheDesperateGoodIslandQuestClass {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: string;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: CampOfTheDesperateGoodIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: string;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: string;
    readonly challenge_type: string;
}

export interface CampOfTheDesperateGoodIslandQuestReward {
    readonly type: Type4;
    readonly data: MischievousData;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: FluffyConfiguration;
}

export interface MischievousData {
    readonly instant_currency?: number;
    readonly rare_unit_order_boost?: number;
}

export interface CareForTheWoundedEvilIslandQuest {
    readonly steps: any[];
    readonly questtype: Questtype | null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: CareForTheWoundedEvilIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null | string;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: string;
    readonly start_events: string[];
    readonly progress_events: string[];
    readonly side?: string;
    readonly challenge_type?: string;
}

export interface CareForTheWoundedEvilIslandQuestReward {
    readonly type: Type4;
    readonly data: BraggadociousData;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: InstantCurrencyID;
    readonly configuration: TentacledConfiguration;
}

export interface TentacledConfiguration {
    readonly type: MetaDefaultsTypeEnum;
    readonly amount: number;
    readonly level: number;
}

export interface BraggadociousData {
    readonly instant_currency: number;
}

export interface Task {
    readonly description: string;
    readonly description_tooltip: string;
    readonly short_description: string;
    readonly name: string;
    readonly points: number;
    readonly end_time: number;
    readonly force_show_steps: boolean;
    readonly progress_events: string[];
    readonly start_events: any[];
    readonly reward: any[];
    readonly icon: string;
    readonly subtype: string;
    readonly type: string;
}

export interface CelebrateQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: CelebratePartyQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface CelebratePartyQuestReward {
    readonly type: string;
    readonly data: Data1;
    readonly stashable: boolean;
}

export interface Data1 {
    readonly culture: number;
}

export interface CelebrationsOfARulerEvilIslandQuestClass {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: string;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: CelebrationsOfARulerEvilIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: string;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: string;
    readonly challenge_type: string;
}

export interface CelebrationsOfARulerEvilIslandQuestReward {
    readonly type: Type4;
    readonly data: Data2;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: GrepolympiaChampionship1_MetaDefaults;
}

export interface Data2 {
    readonly instant_currency?: number;
    readonly rare_attack_boost?: number;
}

export interface CelebrationsOfARulerGoodIslandQuestClass {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null | string;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: CelebrationsOfARulerGoodIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null | string;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null | string;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: string;
    readonly challenge_type: string;
}

export interface CelebrationsOfARulerGoodIslandQuestReward {
    readonly type: Type4;
    readonly data: Data3;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: PowerID;
    readonly configuration: FluffyConfiguration;
}

export interface Data3 {
    readonly instant_currency?: number;
    readonly favor_boost?: number;
}

export enum PowerID {
    FavorBoost = "favor_boost",
    InstantCurrency = "instant_currency",
}

export interface ClaimLoadQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: Browser2AppQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: ClaimLoadQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface ClaimLoadQuestReward {
    readonly type: string;
    readonly data: Data4;
    readonly stashable: boolean;
}

export interface Data4 {
    readonly sword: number;
}

export interface ConfirmEmailQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: ConfirmEmailQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: Array<null | string>;
    readonly progress_events: string[];
}

export interface ConfirmEmailQuestReward {
    readonly type: Type5;
    readonly data: Data5;
    readonly stashable: boolean;
}

export interface Data5 {
    readonly gold: number;
}

export interface ConquerFarmMajorQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: ConquerFarmMajorQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface ConquerFarmMajorQuestReward {
    readonly type: string;
    readonly data: Data6;
    readonly stashable: boolean;
}

export interface Data6 {
    readonly hoplite: number;
    readonly rider: number;
}

export interface ConquerFarmMinorQuestClass {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: ConquerFarmMinorQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface ConquerFarmMinorQuestReward {
    readonly type: Type5;
    readonly data: Data7;
    readonly stashable: boolean;
}

export interface Data7 {
    readonly wood: number;
    readonly iron: number;
}

export interface ConquerFarmVillage4 {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: ConquerFarmVillage4Reward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface ConquerFarmVillage4Reward {
    readonly type: string;
    readonly data: Data8;
    readonly stashable: boolean;
}

export interface Data8 {
    readonly rider: number;
}

export interface ConquerTownQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: ConquerTownQuestReward[];
    readonly questline: Questline;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface ConquerTownQuestReward {
    readonly type: string;
    readonly data: Data9;
    readonly stashable: boolean;
}

export interface Data9 {
    readonly archer: number;
}

export interface CrusadeGoodIslandQuestClass {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: string;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: CrusadeGoodIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: string;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: string;
    readonly challenge_type: string;
}

export interface CrusadeGoodIslandQuestReward {
    readonly type: Type4;
    readonly data: Data10;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: FluffyConfiguration;
}

export interface Data10 {
    readonly instant_currency?: number;
    readonly rare_defense_boost?: number;
}

export interface DefeatThePersiansEvilIslandQuestClass {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: DefeatThePersiansEvilIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: string;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: Side;
    readonly challenge_type: string;
}

export interface DefeatThePersiansEvilIslandQuestReward {
    readonly type: Type4;
    readonly data: Data11;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: GrepolympiaChampionship1_MetaDefaults;
}

export interface Data11 {
    readonly instant_currency?: number;
    readonly defense_boost?: number;
}

export interface DistractionEvilIslandQuest {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: DistractionEvilIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: string;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: Side;
    readonly challenge_type: string;
}

export interface DistractionEvilIslandQuestReward {
    readonly type: Type4;
    readonly data: Data12;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: InstantCurrencyCRMMetaDefaults;
}

export interface Data12 {
    readonly instant_currency?: number;
    readonly attack_boost?: number;
}

export interface FoundTownQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: ClaimLoadQuestReward[];
    readonly questline: Questline;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface HeroOfThePopulaceEvilIslandQuestClass {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: string;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: HeroOfThePopulaceEvilIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: string;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: Side;
    readonly challenge_type: string;
}

export interface HeroOfThePopulaceEvilIslandQuestReward {
    readonly type: Type4;
    readonly data: Data13;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: GrepolympiaChampionship1_MetaDefaults;
}

export interface Data13 {
    readonly instant_currency?: number;
    readonly unit_movement_boost?: number;
}

export interface JoinAllianceQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: JoinAllianceQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface JoinAllianceQuestReward {
    readonly type: string;
    readonly data: ClaimUnitCooldowns;
    readonly stashable: boolean;
}

export interface RecruitAttackShipQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: RecruitAttackShipQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface RecruitAttackShipQuestReward {
    readonly type: string;
    readonly data: Data14;
    readonly stashable: boolean;
}

export interface Data14 {
    readonly attack_ship: number;
}

export interface RecruitBiremeQuestClass {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: RecruitBiremeQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface RecruitBiremeQuestReward {
    readonly type: string;
    readonly data: Data15;
    readonly stashable: boolean;
}

export interface Data15 {
    readonly bireme: number;
}

export interface RecruitSmallTransporterQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: RecruitSmallTransporterQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
}

export interface RecruitSmallTransporterQuestReward {
    readonly type: string;
    readonly data: Data16;
    readonly stashable: boolean;
}

export interface Data16 {
    readonly small_transporter: number;
}

export interface RiddanceOfThePoorEvilIslandQuestClass {
    readonly steps: any[];
    readonly questtype: null;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: string;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: RiddanceOfThePoorEvilIslandQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: string;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: AllJustAnExploitEvilIslandQuestType;
    readonly start_events: any[];
    readonly progress_events: string[];
    readonly side: string;
    readonly challenge_type: string;
}

export interface RiddanceOfThePoorEvilIslandQuestReward {
    readonly type: Type4;
    readonly data: Data17;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: FluffyConfiguration;
}

export interface Data17 {
    readonly instant_currency?: number;
    readonly rare_building_order_boost?: number;
}

export interface SetPlayernameAsGuestQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: AssignHeroQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: Array<null | string>;
    readonly progress_events: string[];
}

export interface StoreIronQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: StoreIronQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface StoreIronQuestReward {
    readonly type: Type5;
    readonly data: Data18;
    readonly stashable: boolean;
}

export interface Data18 {
    readonly iron: number;
}

export interface Win100AttackSpotFightsQuestClass {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: Win100AttackSpotFightsQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface Win100AttackSpotFightsQuestReward {
    readonly type: Type4;
    readonly data: Data19;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: GrepolympiaChampionship1_MetaDefaults;
}

export interface Data19 {
    readonly epic_resource_boost: number;
}

export interface Win10AttackSpotFightsQuest {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: Win10AttackSpotFightsQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface Win10AttackSpotFightsQuestReward {
    readonly type: Type4;
    readonly data: Data20;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: GrepolympiaChampionship1_MetaDefaults;
}

export interface Data20 {
    readonly rare_favor_boost: number;
}

export interface Win25AttackSpotFightsQuestClass {
    readonly steps: any[];
    readonly questtype: Questtype;
    readonly tasks: AllJustAnExploitEvilIslandQuestTask[];
    readonly description: string;
    readonly description_tooltip: null;
    readonly short_description: string;
    readonly name: string;
    readonly rewards: Win25AttackSpotFightsQuestReward[];
    readonly questline: string;
    readonly quest_icon_type: null;
    readonly auto_accept: boolean;
    readonly show_introduction_steps: boolean;
    readonly force_show_steps: boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close: boolean;
    readonly show_window: null;
    readonly clearViewOnAccept: boolean;
    readonly clearViewOnReward: boolean;
    readonly auto_reward: boolean;
    readonly or_conditions: boolean;
    readonly can_abort: boolean;
    readonly type: App2BrowserQuestType;
    readonly start_events: string[];
    readonly progress_events: string[];
}

export interface Win25AttackSpotFightsQuestReward {
    readonly type: Type4;
    readonly data: Data21;
    readonly challenge_factor: number;
    readonly stashable: boolean;
    readonly power_id: string;
    readonly configuration: StickyConfiguration;
}

export interface StickyConfiguration {
    readonly type: string;
    readonly percent: number;
    readonly lifetime: number;
    readonly level: number;
}

export interface Data21 {
    readonly rare_resource_boost: number;
}

export interface Research {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly research_dependencies: any[];
    readonly building_dependencies: ResearchBuildingDependencies;
    readonly resources: Resources;
    readonly required_time: number;
    readonly research_points: number;
}

export interface ResearchBuildingDependencies {
    readonly academy: number;
}

export interface Texts {
    readonly curator_confirm: Confirm;
    readonly priest_confirm: Confirm;
    readonly trader_confirm: Confirm;
    readonly captain_confirm: Confirm;
    readonly commander_confirm: Confirm;
}

export interface Confirm {
    readonly title: string;
    readonly content: string;
    readonly check: string;
}

export type UnitsName = "militia" | "sword" | "slinger" | "archer" | "hoplite" | "rider" | "chariot" | "catapult" | "minotaur" | "manticore" | "zyklop" | "harpy" | "medusa" | "centaur" | "pegasus" | "cerberus" | "fury" | "griffin" | "calydonian_boar" | "satyr" | "spartoi" | "ladon" | "godsent" | "big_transporter" | "bireme" | "attack_ship" | "demolition_ship" | "small_transporter" | "trireme" | "colonize_ship" | "sea_monster" | "siren";

