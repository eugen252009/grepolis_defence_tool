export type Collections = {
    readonly FarmTownPlayerRelation:        Array<FarmTownPlayerRelation[]>;
    readonly FarmTown:                      Array<FarmTown[]>;
    readonly PlayerHero:                    Array<PlayerHero[]>;
    readonly MapFavorites:                  Array<any[]>;
    readonly TownGroup:                     Array<TownGroup[]>;
    readonly TownGroupTown:                 Array<TownGroupTown[]>;
    readonly Town:                          Array<Town[]>;
    readonly BuildingBuildData:             Array<BuildingBuildDatum[]>;
    readonly Militia:                       Array<any[]>;
    readonly IslandQuest:                   Array<any[]>;
    readonly Benefit:                       Array<Benefit[]>;
    readonly PlayerHint:                    Array<PlayerHint[]>;
    readonly CrmCampaign:                   Array<any[]>;
    readonly CrmIcon:                       Array<any[]>;
    readonly Progressable:                  Array<Progressable[]>;
    readonly FeatureBlock:                  Array<any[]>;
    readonly InventoryItem:                 Array<InventoryItem[]>;
    readonly Wonder:                        Array<any[]>;
    readonly AlliancePact:                  Array<any[]>;
    readonly RuntimeSimulator:              Array<any[]>;
    readonly MapExtraInfo:                  Array<any[]>;
    readonly CustomColor:                   Array<CustomColor[]>;
    readonly PlayerAward:                   Array<PlayerAward[]>;
    readonly Takeover:                      Array<any[]>;
    readonly Attack:                        Array<any[]>;
    readonly Support:                       Array<Support[]>;
    readonly BundlesAndPackagesPlayerLevel: Array<any[]>;
    readonly GrepoScoreCategoryHash:        Array<GrepoScoreCategoryHash[]>;
    readonly IslandQuestPlayerRelation:     Array<any[]>;
    readonly Highlight:                     Array<any[]>;
    readonly CollectedItem:                 Array<any[]>;
    readonly MovementsRevoltAttacker:       Array<any[]>;
    readonly CappedPowersProgress:          Array<any[]>;
    readonly CastedAlliancePowers:          Array<any[]>;
    readonly PlayerArtifact:                Array<any[]>;
    readonly PlayerCitySkin:                Array<PlayerCitySkin[]>;
    readonly PlayerTask:                    Array<any[]>;
    readonly WorldBoost:                    Array<any[]>;
    readonly Trade:                         Array<any[]>;
    readonly UnitOrder:                     Array<UnitOrder[]>;
    readonly CastedPowers:                  Array<CastedPower[]>;
    readonly Units:                         Array<Unit[]>;
    readonly BuildingOrder:                 Array<BuildingOrder[]>;
    readonly ResearchOrder:                 Array<any[]>;
    readonly Buildings:                     Array<any[]>;
    readonly Researches:                    Array<any[]>;
    readonly Celebration:                   Array<Celebration[]>;
    readonly MovementsSpy:                  Array<any[]>;
    readonly MovementsUnits:                Array<any[]>;
    readonly MovementsRevoltDefender:       Array<any[]>;
    readonly MovementsConqueror:            Array<any[]>;
    readonly MovementsColonization:         Array<any[]>;
    readonly EasterDroppedIngredient:       Array<any[]>;
    readonly CampaignDroppedUnits:          Array<any[]>;
    readonly SpyReport:                     any[];
    readonly PremiumInventoryItem:          any[];
}

export type Benefit = {
    readonly id:       number;
    readonly type:     string;
    readonly start:    number;
    readonly end:      number;
    readonly duration: number;
    readonly params:   Params;
    readonly changed:  number;
    readonly event_id: string;
}

export type Params = {
    readonly peace_type: string;
}

export type BuildingBuildDatum = {
    readonly id:                           number;
    readonly player_id:                    number;
    readonly town_id:                      number;
    readonly is_building_order_queue_full: boolean;
    readonly building_data:                BuildingData;
}

export type BuildingData = {
    readonly main:         Academy;
    readonly hide:         Academy;
    readonly place:        Academy;
    readonly lumber:       Academy;
    readonly stoner:       Academy;
    readonly ironer:       Academy;
    readonly market:       Academy;
    readonly docks:        BuildingDataDocks;
    readonly barracks:     Academy;
    readonly wall:         Academy;
    readonly storage:      Academy;
    readonly farm:         Academy;
    readonly academy:      Academy;
    readonly temple:       Academy;
    readonly theater:      Theater;
    readonly thermal:      Thermal;
    readonly library:      Library;
    readonly lighthouse:   Lighthouse;
    readonly tower:        Tower;
    readonly statue:       Statue;
    readonly oracle:       Oracle;
    readonly trade_office: TradeOffice;
}

export type Academy = {
    readonly can_upgrade:           boolean;
    readonly can_upgrade_reduced:   boolean;
    readonly can_tear_down:         boolean;
    readonly enough_storage:        boolean;
    readonly enough_resources:      boolean;
    readonly level:                 number;
    readonly next_level:            number;
    readonly tear_down_level:       number;
    readonly special:               boolean;
    readonly has_max_level:         boolean;
    readonly resources_for:         CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for:        number;
    readonly population_free:       number;
    readonly missing_dependencies:  any[];
    readonly building_time:         string;
    readonly tear_down_time:        string;
    readonly group_locked:          boolean;
}

export type CancelRefund = {
    readonly wood:  number;
    readonly stone: number;
    readonly iron:  number;
}

export type BuildingDataDocks = {
    readonly can_upgrade:           boolean;
    readonly can_upgrade_reduced:   boolean;
    readonly can_tear_down:         boolean;
    readonly enough_storage:        boolean;
    readonly enough_resources:      boolean;
    readonly level:                 number;
    readonly next_level:            number;
    readonly tear_down_level:       number;
    readonly special:               boolean;
    readonly has_max_level:         boolean;
    readonly resources_for:         CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for:        number;
    readonly population_free:       number;
    readonly missing_dependencies:  any[] | PurpleMissingDependencies;
    readonly building_time:         string;
    readonly tear_down_time:        string;
    readonly group_locked:          boolean;
}

export type PurpleMissingDependencies = {
    readonly main: MainClass;
}

export type MainClass = {
    readonly needed_level: number;
    readonly name:         Name;
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

export type Library = {
    readonly can_upgrade:           boolean;
    readonly can_upgrade_reduced:   boolean;
    readonly can_tear_down:         boolean;
    readonly enough_storage:        boolean;
    readonly enough_resources:      boolean;
    readonly level:                 number | string;
    readonly next_level:            number;
    readonly tear_down_level:       number;
    readonly special:               boolean;
    readonly has_max_level:         boolean;
    readonly resources_for:         CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for:        number;
    readonly population_free:       number;
    readonly missing_dependencies:  any[] | FluffyMissingDependencies;
    readonly building_time:         string;
    readonly tear_down_time:        string;
    readonly group_locked:          boolean;
}

export type FluffyMissingDependencies = {
    readonly main:     MainClass;
    readonly academy?: MainClass;
    readonly docks?:   MainClass;
}

export type Lighthouse = {
    readonly can_upgrade:           boolean;
    readonly can_upgrade_reduced:   boolean;
    readonly can_tear_down:         boolean;
    readonly enough_storage:        boolean;
    readonly enough_resources:      boolean;
    readonly level:                 number | string;
    readonly next_level:            number;
    readonly tear_down_level:       number;
    readonly special:               boolean;
    readonly has_max_level:         boolean;
    readonly resources_for:         CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for:        number;
    readonly population_free:       number;
    readonly missing_dependencies:  LighthouseMissingDependencies;
    readonly building_time:         string;
    readonly tear_down_time:        string;
    readonly group_locked:          boolean;
}

export type LighthouseMissingDependencies = {
    readonly docks: MainClass;
    readonly main?: MainClass;
}

export type Oracle = {
    readonly can_upgrade:           boolean;
    readonly can_upgrade_reduced:   boolean;
    readonly can_tear_down:         boolean;
    readonly enough_storage:        boolean;
    readonly enough_resources:      boolean;
    readonly level:                 number | string;
    readonly next_level:            number;
    readonly tear_down_level:       number;
    readonly special:               boolean;
    readonly has_max_level:         boolean;
    readonly resources_for:         CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for:        number;
    readonly population_free:       number;
    readonly missing_dependencies:  any[] | TentacledMissingDependencies;
    readonly building_time:         string;
    readonly tear_down_time:        string;
    readonly group_locked:          boolean;
}

export type TentacledMissingDependencies = {
    readonly hide?:   MainClass;
    readonly temple?: MainClass;
    readonly main?:   MainClass;
}

export type Statue = {
    readonly can_upgrade:           boolean;
    readonly can_upgrade_reduced:   boolean;
    readonly can_tear_down:         boolean;
    readonly enough_storage:        boolean;
    readonly enough_resources:      boolean;
    readonly level:                 number | string;
    readonly next_level:            number;
    readonly tear_down_level:       number;
    readonly special:               boolean;
    readonly has_max_level:         boolean;
    readonly resources_for:         CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for:        number;
    readonly population_free:       number;
    readonly missing_dependencies:  any[] | StickyMissingDependencies;
    readonly building_time:         string;
    readonly tear_down_time:        string;
    readonly group_locked:          boolean;
}

export type StickyMissingDependencies = {
    readonly temple?: MainClass;
    readonly main?:   MainClass;
}

export type Theater = {
    readonly can_upgrade:           boolean;
    readonly can_upgrade_reduced:   boolean;
    readonly can_tear_down:         boolean;
    readonly enough_storage:        boolean;
    readonly enough_resources:      boolean;
    readonly level:                 number | string;
    readonly next_level:            number;
    readonly tear_down_level:       number;
    readonly special:               boolean;
    readonly has_max_level:         boolean;
    readonly resources_for:         CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for:        number;
    readonly population_free:       number;
    readonly missing_dependencies:  any[] | IndigoMissingDependencies;
    readonly building_time:         string;
    readonly tear_down_time:        string;
    readonly group_locked:          boolean;
}

export type IndigoMissingDependencies = {
    readonly main:   MainClass;
    readonly lumber: MainClass;
    readonly ironer: MainClass;
    readonly docks?: MainClass;
}

export type Thermal = {
    readonly can_upgrade:           boolean;
    readonly can_upgrade_reduced:   boolean;
    readonly can_tear_down:         boolean;
    readonly enough_storage:        boolean;
    readonly enough_resources:      boolean;
    readonly level:                 number | string;
    readonly next_level:            number;
    readonly tear_down_level:       number;
    readonly special:               boolean;
    readonly has_max_level:         boolean;
    readonly resources_for:         CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for:        number;
    readonly population_free:       number;
    readonly missing_dependencies:  any[] | IndecentMissingDependencies;
    readonly building_time:         string;
    readonly tear_down_time:        string;
    readonly group_locked:          boolean;
}

export type IndecentMissingDependencies = {
    readonly farm?:  MainClass;
    readonly main?:  MainClass;
    readonly docks?: MainClass;
}

export type Tower = {
    readonly can_upgrade:           boolean;
    readonly can_upgrade_reduced:   boolean;
    readonly can_tear_down:         boolean;
    readonly enough_storage:        boolean;
    readonly enough_resources:      boolean;
    readonly level:                 number | string;
    readonly next_level:            number;
    readonly tear_down_level:       number;
    readonly special:               boolean;
    readonly has_max_level:         boolean;
    readonly resources_for:         CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for:        number;
    readonly population_free:       number;
    readonly missing_dependencies:  TowerMissingDependencies;
    readonly building_time:         string;
    readonly tear_down_time:        string;
    readonly group_locked:          boolean;
}

export type TowerMissingDependencies = {
    readonly wall:    MainClass;
    readonly temple?: MainClass;
    readonly main?:   MainClass;
}

export type TradeOffice = {
    readonly can_upgrade:           boolean;
    readonly can_upgrade_reduced:   boolean;
    readonly can_tear_down:         boolean;
    readonly enough_storage:        boolean;
    readonly enough_resources:      boolean;
    readonly level:                 number | string;
    readonly next_level:            number;
    readonly tear_down_level:       number;
    readonly special:               boolean;
    readonly has_max_level:         boolean;
    readonly resources_for:         CancelRefund;
    readonly resources_for_reduced: CancelRefund;
    readonly population_for:        number;
    readonly population_free:       number;
    readonly missing_dependencies:  any[] | HilariousMissingDependencies;
    readonly building_time:         string;
    readonly tear_down_time:        string;
    readonly group_locked:          boolean;
}

export type HilariousMissingDependencies = {
    readonly market:  MainClass;
    readonly temple?: MainClass;
    readonly main?:   MainClass;
}

export type BuildingOrder = {
    readonly id:                 number;
    readonly town_id:            number;
    readonly building_type:      string;
    readonly to_be_completed_at: number;
    readonly tear_down:          boolean;
    readonly created_at:         number;
    readonly wood:               number;
    readonly stone:              number;
    readonly iron:               number;
    readonly building_time:      number;
    readonly cancel_refund:      CancelRefund;
}

export type CastedPower = {
    readonly end_at:           number | null;
    readonly power_id:         string;
    readonly level:            null;
    readonly extended:         number;
    readonly town_id:          number;
    readonly configuration:    CastedPowerConfiguration | null;
    readonly origin_player_id: number;
    readonly id:               number;
}

export type CastedPowerConfiguration = {
    readonly level?:                    number;
    readonly type?:                     string;
    readonly percent?:                  number;
    readonly lifetime?:                 number;
    readonly amount?:                   number | string;
    readonly level_increases?:          string;
    readonly level_increases_decimals?: number;
}

export type Celebration = {
    readonly id:               number;
    readonly town_id:          number;
    readonly celebration_type: string;
    readonly finished_at:      number;
}

export type CustomColor = {
    readonly id:                 number;
    readonly player_id:          number;
    readonly other_id:           number;
    readonly type:               CustomColorType;
    readonly color:              string;
    readonly other_name:         string;
    readonly player_alliance_id: number | null;
}

export enum CustomColorType {
    Alliance = "alliance",
    Player = "player",
}

export type FarmTown = {
    readonly id:               number;
    readonly name:             string;
    readonly island_x:         number;
    readonly island_y:         number;
    readonly island_xy:        number;
    readonly chunks_x:         ChunksX;
    readonly chunks_y:         ChunksY;
    readonly number_on_island: number;
    readonly resource_offer:   ResourceDemand;
    readonly resource_demand:  ResourceDemand;
}

export enum ChunksX {
    The24 = "{24}",
    The2425 = "{24,25}",
    The25 = "{25}",
    The2728 = "{27,28}",
    The28 = "{28}",
}

export enum ChunksY {
    The27 = "{27}",
    The2727 = "{27,27}",
    The33 = "{33}",
    The34 = "{34}",
    The3434 = "{34,34}",
}

export enum ResourceDemand {
    Iron = "iron",
    Stone = "stone",
    Wood = "wood",
}

export type FarmTownPlayerRelation = {
    readonly id:                             number;
    readonly farm_town_id:                   number;
    readonly player_id:                      number;
    readonly updated_at:                     number | null;
    readonly trade_ratio:                    number;
    readonly ratio_updated_at:               number;
    readonly lootable_at:                    number | null;
    readonly last_looted_at:                 number | null;
    readonly relation_status:                number;
    readonly loot:                           number;
    readonly expansion_stage:                number;
    readonly expansion_at:                   null;
    readonly lootcap_reset_at:               number;
    readonly upgrade_cost:                   number;
    readonly upgrade_time:                   number;
    readonly current_trade_ratio:            number;
    readonly ratio_time_diff:                number;
    readonly claim_resource_values?:         number[];
    readonly trade_duration?:                number;
    readonly max_trade_capacity?:            number;
    readonly available_trade_capacity?:      number;
    readonly hymn_to_aphrodite_trade_bonus?: number;
}

export type GrepoScoreCategoryHash = {
    readonly category: GrepoScoreCategoryHashCategory;
    readonly hash:     string;
    readonly id:       number;
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

export type InventoryItem = {
    readonly properties: Properties;
    readonly type:       InventoryItemType;
    readonly id:         number;
    readonly count:      number;
}

export type Properties = {
    readonly power_id:      string;
    readonly configuration: PropertiesConfiguration;
}

export type PropertiesConfiguration = {
    readonly percent?:        number;
    readonly lifetime?:       number;
    readonly level?:          number;
    readonly type?:           string;
    readonly limit?:          Limit;
    readonly progress?:       Limit;
    readonly amount?:         number;
    readonly wall_bonus?:     number;
    readonly militia_bonus?:  number;
    readonly farm_level_cap?: number;
}

export type Limit = {
    readonly battlepoints: number;
}

export enum InventoryItemType {
    PowerRewardEffectInventoryItem = "power_reward_effect_inventory_item",
}

export type PlayerAward = {
    readonly id:             number;
    readonly award_id:       string;
    readonly name:           string;
    readonly descriptions:   string[] | { [key: string]: string };
    readonly order_index:    number;
    readonly is_obtainable:  boolean;
    readonly is_reoccurring: boolean;
    readonly awarded_at:     number;
    readonly has_level:      boolean;
    readonly level:          number;
    readonly tier:           Tier;
    readonly year:           number | null;
    readonly category:       GrepoScoreCategoryHashCategory;
    readonly subcategory:    string;
    readonly owned:          boolean;
    readonly awarded_first:  boolean;
    readonly event_id:       string;
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

export type PlayerCitySkin = {
    readonly id:         string;
    readonly available:  boolean;
    readonly selected:   boolean;
    readonly world_only: boolean;
}

export type PlayerHero = {
    readonly id:                       number;
    readonly player_id:                number;
    readonly type:                     string;
    readonly experience_points:        number;
    readonly level:                    number;
    readonly cured_at:                 null;
    readonly town_arrival_at:          null;
    readonly assignment_type:          AssignmentType;
    readonly home_town_id:             number;
    readonly current_units_id:         number;
    readonly origin_town_id:           number;
    readonly origin_town_name:         string;
    readonly target_town_name:         null;
    readonly origin_town_link:         string;
    readonly target_town_link:         string;
    readonly player_link:              string;
    readonly target_player_link:       string;
    readonly is_attacking_attack_spot: string;
}

export enum AssignmentType {
    Town = "town",
}

export type PlayerHint = {
    readonly id:                   number;
    readonly player_id:            number;
    readonly type:                 string;
    readonly hide:                 boolean;
    readonly is_user_configurable: boolean;
    readonly category:             PlayerHintCategory;
    readonly is_fake?:             boolean;
}

export enum PlayerHintCategory {
    Confirmation = "confirmation",
    Map = "map",
}

export type Progressable = {
    readonly read:              boolean;
    readonly progress:          number[];
    readonly id:                number;
    readonly progressable_id:   string;
    readonly progressor_id:     number;
    readonly state:             string;
    readonly steps_shown:       boolean;
    readonly configuration:     null;
    readonly player_game_phase: number;
    readonly static_data:       StaticData;
    readonly dynamic_data:      any[];
    readonly is_island_quest:   boolean;
    readonly progress_new:      ProgressNew;
}

export type ProgressNew = {
    readonly conditions: Condition[];
    readonly state:      number[];
}

export type Condition = {
    readonly type:     string;
    readonly subtype:  string;
    readonly progress: Progress;
}

export type Progress = {
    readonly curr: number;
    readonly max:  number;
}

export type StaticData = {
    readonly name:              string;
    readonly description:       string;
    readonly short_description: string;
    readonly rewards:           Reward[];
    readonly tasks:             Task[];
    readonly questtype:         string;
    readonly questline:         string;
    readonly side:              null;
    readonly challenge_type:    null;
    readonly start_events:      string[];
    readonly progress_events:   string[];
}

export type Reward = {
    readonly type:      string;
    readonly data:      Data;
    readonly stashable: boolean;
}

export type Data = {
    readonly amount: number;
}

export type Task = {
    readonly description: string;
    readonly image_class: ImageClass;
}

export type ImageClass = {
    readonly type: string;
    readonly name: string;
}

export type Support = {
    readonly id:       number;
    readonly town_id:  number;
    readonly incoming: number;
}

export type Town = {
    readonly player_id:                number;
    readonly name:                     string;
    readonly island_x:                 number;
    readonly island_y:                 number;
    readonly resources_last_update:    number;
    readonly resource_rare:            ResourceDemand;
    readonly resource_plenty:          ResourceDemand;
    readonly population_extra:         number;
    readonly god:                      string;
    readonly points:                   number;
    readonly espionage_storage:        number;
    readonly id:                       number;
    readonly available_population:     number;
    readonly last_wood:                number;
    readonly last_stone:               number;
    readonly last_iron:                number;
    readonly population:               Population;
    readonly max_trade_capacity:       number;
    readonly link_fragment:            string;
    readonly resources:                CancelRefund;
    readonly resources_contraints:     ResourcesContraints;
    readonly production:               CancelRefund;
    readonly storage:                  number;
    readonly sea_id:                   number;
    readonly island_id:                number;
    readonly island_type:              number;
    readonly abs_x:                    number;
    readonly abs_y:                    number;
    readonly on_small_island:          boolean;
    readonly available_trade_capacity: number;
    readonly conquest:                 boolean;
    readonly has_conqueror:            boolean;
    readonly wood:                     number;
    readonly stone:                    number;
    readonly iron:                     number;
}

export type Population = {
    readonly max:     number;
    readonly blocked: number;
}

export type ResourcesContraints = {
    readonly plenty: ResourceDemand;
    readonly rare:   ResourceDemand;
}

export type TownGroup = {
    readonly player_id: number;
    readonly name:      string;
    readonly active:    boolean | null;
    readonly collapsed: boolean | null;
    readonly id:        number;
}

export type TownGroupTown = {
    readonly group_id: number;
    readonly town_id:  number;
    readonly id:       number;
}

export type UnitOrder = {
    readonly parts_done:             number;
    readonly id:                     number;
    readonly town_id:                number;
    readonly unit_type:              string;
    readonly kind:                   string;
    readonly count:                  number;
    readonly units_left:             number;
    readonly to_be_completed_at:     number;
    readonly created_at:             number;
    readonly wood:                   number;
    readonly stone:                  number;
    readonly iron:                   number;
    readonly favor:                  number;
    readonly refund_for_single_unit: RefundForSingleUnit;
    readonly player_id:              number;
}

export type RefundForSingleUnit = {
    readonly wood:  number;
    readonly stone: number;
    readonly iron:  number;
    readonly favor: number;
    readonly pop:   number;
}

export type Unit = {
    readonly id:                       number;
    readonly home_town_id:             number;
    readonly current_town_id:          number;
    readonly sword:                    number;
    readonly slinger:                  number;
    readonly archer:                   number;
    readonly hoplite:                  number;
    readonly rider:                    number;
    readonly chariot:                  number;
    readonly catapult:                 number;
    readonly minotaur:                 number;
    readonly manticore:                number;
    readonly zyklop:                   number;
    readonly harpy:                    number;
    readonly medusa:                   number;
    readonly centaur:                  number;
    readonly pegasus:                  number;
    readonly cerberus:                 number;
    readonly fury:                     number;
    readonly griffin:                  number;
    readonly calydonian_boar:          number;
    readonly satyr:                    number;
    readonly spartoi:                  number;
    readonly ladon:                    number;
    readonly godsent:                  number;
    readonly big_transporter:          number;
    readonly bireme:                   number;
    readonly attack_ship:              number;
    readonly demolition_ship:          number;
    readonly small_transporter:        number;
    readonly trireme:                  number;
    readonly colonize_ship:            number;
    readonly sea_monster:              number;
    readonly siren:                    number;
    readonly militia:                  number;
    readonly heroes:                   null;
    readonly current_town_player_name: string;
    readonly current_town_player_id:   number;
    readonly home_town_name:           string;
    readonly current_town_name:        string;
    readonly island_x:                 number;
    readonly island_y:                 number;
    readonly same_island:              boolean;
    readonly home_town_link:           string;
    readonly current_town_link:        string;
    readonly current_player_link:      string;
}
