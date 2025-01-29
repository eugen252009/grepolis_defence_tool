export type GameDataType = {
    readonly units:                        { [key: string]: UnitValue };
    readonly powers:                       Powers;
    readonly map_size:                     number;
    readonly city_overview:                CityOverview;
    readonly frontendBridge:               FrontendBridge;
    readonly buildings:                    Buildings;
    readonly godPowersTown:                GodPowersTown;
    readonly godPowersCommand:             GodPowersCommand;
    readonly inventoryItems:               InventoryItems;
    readonly heroes:                       { [key: string]: Hero };
    readonly progressable:                 Progressable;
    readonly campaignUnits:                { [key: string]: CampaignUnit };
    readonly campaignStages:               { [key: string]: CampaignStage };
    readonly campaignMeta:                 CampaignMeta;
    readonly building:                     Building;
    readonly island_quests:                IslandQuests;
    readonly heroes_meta:                  { [key: string]: number };
    readonly crafting_meta:                CraftingMeta;
    readonly inventory:                    GameDataTypeInventory;
    readonly research_bonus:               { [key: string]: number };
    readonly min_main_level_for_tear_down: number;
    readonly colonization_requirements:    ColonizationRequirements;
    readonly resources:                    ResourceNames;
    readonly resource_names:               ResourceNames;
    readonly researches:                   { [key: string]: Research };
    readonly farm_town_time_values:        FarmTownTimeValues;
    readonly farm_town:                    GameDataTypeFarmTown;
    readonly unit_order_refund_factor:     number;
    readonly FarmMouseOverTemplate:        string;
    readonly ConfirmDialogTemplate:        string;
    readonly dailyBonusStatic:             DailyBonusStatic;
    readonly celebration_cost:             number;
    readonly additional_runtime_modifier:  AdditionalRuntimeModifier;
    readonly godPowersForOtherTowns:       GodPowersForOtherTowns;
    readonly cancel_times:                 CancelTimes;
    readonly events:                       Events;
    readonly default_flag_colors:          DefaultFlagColors;
    readonly gods:                         Gods;
    readonly artifacts:                    GameDataTypeArtifacts;
    readonly texts:                        Texts;
    readonly currencies:                   Currencies;
}

export type AdditionalRuntimeModifier = {
    readonly default_unit_movement_boost: number;
    readonly lighthouse_speed_bonus:      number;
}

export type GameDataTypeArtifacts = {
    readonly storage_modification_for_domination_artifact: number;
}

export type Building = {
    readonly build_cost_reduction_factor: number;
    readonly build_cost_reduction:        number;
}

export type Buildings = {
    readonly main:         Farm;
    readonly hide:         BuildingsHide;
    readonly place:        BuildingsPlace;
    readonly lumber:       Lumber;
    readonly stoner:       Lumber;
    readonly ironer:       Ironer;
    readonly market:       BuildingsMarket;
    readonly docks:        Docks;
    readonly barracks:     Barracks;
    readonly wall:         Wall;
    readonly storage:      BuildingsStorage;
    readonly farm:         Farm;
    readonly academy:      BuildingsAcademy;
    readonly temple:       Temple;
    readonly theater:      Theater;
    readonly thermal:      Thermal;
    readonly library:      Library;
    readonly lighthouse:   Library;
    readonly tower:        Oracle;
    readonly statue:       Oracle;
    readonly oracle:       Oracle;
    readonly trade_office: Oracle;
}

export type BuildingsAcademy = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  AcademyDependencies;
    readonly fixed_building_times:          any[];
    readonly level_build_time_factors:      any[];
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type AcademyDependencies = {
    readonly main:     number;
    readonly farm:     number;
    readonly barracks: number;
}

export type Resources = {
    readonly wood?:   number;
    readonly stone?:  number;
    readonly iron?:   number;
    readonly amount?: number;
}

export type Barracks = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  BarracksDependencies;
    readonly fixed_building_times:          { [key: string]: number };
    readonly level_build_time_factors:      { [key: string]: LevelBuildTimeFactor };
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type BarracksDependencies = {
    readonly main:   number;
    readonly farm:   number;
    readonly ironer: number;
}

export type LevelBuildTimeFactor = {
    readonly level:  number;
    readonly factor: number;
}

export type Docks = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  DocksDependencies;
    readonly fixed_building_times:          any[];
    readonly level_build_time_factors:      any[];
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type DocksDependencies = {
    readonly main:   number;
    readonly lumber: number;
    readonly ironer: number;
}

export type Farm = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  any[];
    readonly fixed_building_times:          { [key: string]: number };
    readonly level_build_time_factors:      { [key: string]: LevelBuildTimeFactor };
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       { [key: string]: number };
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              number[];
    readonly farm_pow?:                     number;
    readonly farm_factor?:                  number;
}

export type BuildingsHide = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  HideDependencies;
    readonly fixed_building_times:          any[];
    readonly level_build_time_factors:      any[];
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type HideDependencies = {
    readonly main:    number;
    readonly storage: number;
    readonly market:  number;
}

export type Ironer = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  IronerDependencies;
    readonly fixed_building_times:          { [key: string]: number };
    readonly level_build_time_factors:      { [key: string]: LevelBuildTimeFactor };
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type IronerDependencies = {
    readonly lumber: number;
}

export type Library = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                boolean;
    readonly image_levels:                  number[];
    readonly dependencies:                  LibraryDependencies;
    readonly fixed_building_times:          any[];
    readonly level_build_time_factors:      any[];
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type LibraryDependencies = {
    readonly main:    number;
    readonly academy: number;
    readonly docks:   number;
    readonly farm?:   number;
}

export type Lumber = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  any[];
    readonly fixed_building_times:          { [key: string]: number };
    readonly level_build_time_factors:      { [key: string]: LevelBuildTimeFactor };
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type BuildingsMarket = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  MarketDependencies;
    readonly fixed_building_times:          any[];
    readonly level_build_time_factors:      any[];
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type MarketDependencies = {
    readonly main:    number;
    readonly storage: number;
}

export type Oracle = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                boolean;
    readonly image_levels:                  number[];
    readonly dependencies:                  OracleDependencies;
    readonly fixed_building_times:          any[];
    readonly level_build_time_factors:      any[];
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type OracleDependencies = {
    readonly main:   number;
    readonly hide?:  number;
    readonly market: number;
    readonly temple: number;
    readonly wall?:  number;
}

export type BuildingsPlace = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                boolean;
    readonly image_levels:                  number[];
    readonly dependencies:                  any[];
    readonly fixed_building_times:          any[];
    readonly level_build_time_factors:      any[];
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type BuildingsStorage = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   number;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  any[];
    readonly fixed_building_times:          { [key: string]: number };
    readonly level_build_time_factors:      { [key: string]: LevelBuildTimeFactor };
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       { [key: string]: number };
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              number[];
    readonly storage_factor:                number;
    readonly storage_pow:                   number;
}

export type Temple = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  TempleDependencies;
    readonly fixed_building_times:          { [key: string]: number };
    readonly level_build_time_factors:      { [key: string]: LevelBuildTimeFactor };
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       { [key: string]: number };
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type TempleDependencies = {
    readonly stoner: number;
}

export type Theater = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                boolean;
    readonly image_levels:                  number[];
    readonly dependencies:                  TheaterDependencies;
    readonly fixed_building_times:          any[];
    readonly level_build_time_factors:      any[];
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
}

export type TheaterDependencies = {
    readonly main:    number;
    readonly lumber:  number;
    readonly ironer:  number;
    readonly docks:   number;
    readonly academy: number;
}

export type Thermal = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                boolean;
    readonly image_levels:                  number[];
    readonly dependencies:                  LibraryDependencies;
    readonly fixed_building_times:          any[];
    readonly level_build_time_factors:      any[];
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
    readonly thermal_pow:                   number;
}

export type Wall = {
    readonly id:                            string;
    readonly name:                          string;
    readonly controller:                    string;
    readonly image:                         null;
    readonly description:                   string;
    readonly level:                         null;
    readonly max_level:                     number;
    readonly min_level:                     number;
    readonly requiredBuildings:             null;
    readonly coordinates:                   string;
    readonly resources:                     Resources;
    readonly pop:                           number;
    readonly wood_factor:                   number;
    readonly stone_factor:                  number;
    readonly iron_factor:                   number;
    readonly pop_factor:                    number;
    readonly hide_factor:                   null;
    readonly points:                        number;
    readonly points_factor:                 number;
    readonly build_time:                    number;
    readonly build_time_factor:             number;
    readonly build_time_reduction:          number;
    readonly bolt_protected:                null;
    readonly image_levels:                  number[];
    readonly dependencies:                  WallDependencies;
    readonly fixed_building_times:          any[];
    readonly level_build_time_factors:      any[];
    readonly special:                       boolean;
    readonly resourcesFor:                  null;
    readonly resourcesForLevelFixed:        any[];
    readonly resourcesForLevelFactor:       any[];
    readonly resourcesForLevelReduceFactor: any[];
    readonly offset_value_map:              any[];
    readonly catapult_factor:               number;
    readonly catapult_power:                number;
    readonly def_factor_per_level:          number;
}

export type WallDependencies = {
    readonly main:   number;
    readonly temple: number;
}

export type CampaignMeta = {
    readonly healer_cooldown:             number;
    readonly hero_cooldown:               number;
    readonly stage_cooldown:              number;
    readonly primary_bonus:               number;
    readonly secondary_bonus:             number;
    readonly healer_base_cost:            number;
    readonly hercules_base_cost:          number;
    readonly "max_amount_of_drop_units ": number;
}

export type CampaignStage = {
    readonly id:                 number;
    readonly name:               string;
    readonly previous_stage_ids: { [key: string]: number };
    readonly unit_capacity:      number;
    readonly units:              Units;
    readonly reward:             The0_Class;
    readonly story_id:           number | null;
    readonly onetime_rewards?:   OnetimeRewards;
}

export type OnetimeRewards = {
    readonly "0": The0_Class;
}

export type The0_Class = {
    readonly type:    string;
    readonly subtype: string;
    readonly level:   number;
}

export type Units = {
    readonly unit_1?: number;
    readonly unit_2?: number;
    readonly unit_4?: number;
    readonly unit_3?: number;
    readonly unit_5?: number;
}

export type CampaignUnit = {
    readonly type:           string;
    readonly name:           string;
    readonly fight_value:    number;
    readonly bonus1:         string;
    readonly bonus2:         null | string;
    readonly base_costs:     number;
    readonly default_amount: number;
    readonly drop_chance:    number;
}

export type CancelTimes = {
    readonly trades:         number;
    readonly unit_movements: number;
    readonly espionage:      number;
}

export type CityOverview = {
    readonly click_map: ClickMap;
}

export type ClickMap = {
    readonly start_offsets: { [key: string]: StartOffset };
    readonly map_points:    MapPoints;
}

export type MapPoints = {
    readonly academy:      string;
    readonly barracks:     string;
    readonly docks:        string;
    readonly farm:         string;
    readonly hide:         string;
    readonly ironer:       string;
    readonly library:      string;
    readonly lighthouse:   string;
    readonly lumber:       string;
    readonly main:         string;
    readonly market:       string;
    readonly oracle:       string;
    readonly statue:       string;
    readonly stoner:       string;
    readonly storage:      string;
    readonly temple:       string;
    readonly theater:      string;
    readonly thermal:      string;
    readonly tower:        string;
    readonly trade_office: string;
    readonly trader:       string;
    readonly wall:         string;
    readonly place:        string;
}

export type StartOffset = {
    readonly x: number;
    readonly y: number;
}

export type ColonizationRequirements = {
    readonly docks:   number;
    readonly academy: number;
}

export type CraftingMeta = {
    readonly default_cost_factor: number;
    readonly easter:              CraftingMetaEaster;
}

export type CraftingMetaEaster = {
    readonly recipe_cost: number;
}

export type Currencies = {
    readonly gold:             BattleTokens;
    readonly laurels:          BattleTokens;
    readonly battle_tokens:    BattleTokens;
    readonly coins_of_wisdom:  BattleTokens;
    readonly coins_of_war:     BattleTokens;
    readonly coins_of_both:    BattleTokens;
    readonly grid_battleships: BattleTokens;
    readonly grid_gods_gifts:  BattleTokens;
    readonly grid_progression: BattleTokens;
    readonly rota_tyche_coins: BattleTokens;
}

export type BattleTokens = {
    readonly name:                    string;
    readonly name_plural:             string;
    readonly id:                      string;
    readonly is_game_player_currency: boolean;
    readonly is_shop_currency:        boolean;
}

export type DailyBonusStatic = {
    readonly name:                   string;
    readonly description:            string;
    readonly num_levels:             number;
    readonly login_in_a_row_highest: number;
    readonly rewards_list:           RewardsList[];
    readonly mystic_rewards:         Array<MysticReward[]>;
}

export type MysticReward = {
    readonly id:            null;
    readonly type:          MysticRewardTypeEnum;
    readonly power_id:      string;
    readonly subtype:       number | string;
    readonly configuration: MysticRewardConfiguration;
    readonly level:         number;
    readonly stashable:     boolean;
}

export type MysticRewardConfiguration = {
    readonly type?:           string;
    readonly amount?:         number;
    readonly lifetime?:       number;
    readonly level?:          number;
    readonly percent?:        number;
    readonly wall_bonus?:     number;
    readonly militia_bonus?:  number;
    readonly farm_level_cap?: number;
}

export enum MysticRewardTypeEnum {
    PowerRewardEffectInventoryItem = "power_reward_effect_inventory_item",
}

export type RewardsList = {
    readonly resources: number;
    readonly favor:     number;
    readonly title:     string;
}

export type DefaultFlagColors = {
    readonly lost_town:      string;
    readonly current_player: string;
    readonly own_alliance:   string;
    readonly default_player: string;
    readonly invite_friend:  string;
    readonly enemy:          string;
    readonly pact:           string;
}

export type Events = {
    readonly assassins: Assassins;
}

export type Assassins = {
    readonly tiers:   { [key: string]: Tier };
    readonly premium: Premium;
}

export type Premium = {
    readonly spots_reset_costs: number;
    readonly buy_arrows_costs:  number;
    readonly buy_arrows_amount: number;
}

export type Tier = {
    readonly amount: number;
    readonly points: number;
}

export type GameDataTypeFarmTown = {
    readonly building_requirements:           BuildingRequirements;
    readonly expansion_times:                 { [key: string]: number };
    readonly expansion_costs:                 { [key: string]: number };
    readonly unlock_costs:                    { [key: string]: number };
    readonly claim_resource_cooldowns_normal: number[];
    readonly claim_resource_cooldowns_booty:  number[];
    readonly claim_units:                     { [key: string]: ClaimUnitCooldowns };
    readonly claim_unit_cooldowns:            ClaimUnitCooldowns;
    readonly max_resources_per_day:           { [key: string]: number };
}

export type BuildingRequirements = {
    readonly resources: { [key: string]: Resource };
    readonly units:     { [key: string]: Resource };
}

export type Resource = {
    readonly building: string;
    readonly level:    number;
}

export type ClaimUnitCooldowns = {
    readonly sword:   number;
    readonly slinger: number;
    readonly archer:  number;
    readonly hoplite: number;
}

export type FarmTownTimeValues = {
    readonly normal: number[];
    readonly booty:  number[];
}

export type FrontendBridge = {
    readonly grepolympia:                 Grepolympia;
    readonly grepolympiashop:             Grepolympiashop;
    readonly advent:                      Advent;
    readonly barracks:                    Cks;
    readonly docks:                       Cks;
    readonly dialog:                      Dialog;
    readonly easter:                      FrontendBridgeEaster;
    readonly easter_collect:              EasterCollect;
    readonly crm_interstitial:            CRMInterstitial;
    readonly crm_screen:                  CRMScreen;
    readonly heroes:                      Heroes;
    readonly heroes_train:                HeroesTrain;
    readonly heroes_welcome:              HeroesWelcome;
    readonly hide:                        FrontendBridgeHide;
    readonly inventory:                   FrontendBridgeInventory;
    readonly island:                      CashShop;
    readonly place:                       FrontendBridgePlace;
    readonly quest:                       Quest;
    readonly quest_progress:              QuestProgress;
    readonly quest_welcome:               QuestWelcome;
    readonly senate:                      Senate;
    readonly hercules2014:                Hercules2014;
    readonly hercules2014_collect:        Hercules2014Collect;
    readonly storage:                     FrontendBridgeStorage;
    readonly daily_login:                 DailyLogin;
    readonly world_wonders_welcome:       Welcome;
    readonly phoenician_salesman_welcome: Welcome;
    readonly militia_welcome:             Welcome;
    readonly gifts_welcome:               GiftsWelcome;
    readonly mobile_tutorial:             MobileTutorial;
    readonly world_end_welcome:           WorldEndWelcome;
    readonly special_offer:               CashShop;
    readonly academy:                     FrontendBridgeAcademy;
    readonly gold_trade_interstitial:     CashShop;
    readonly notes:                       Notes;
    readonly valentinesday_collect:       ValentinesdayCollect;
    readonly update_notification:         UpdateNotification;
    readonly farm_town:                   FrontendBridgeFarmTown;
    readonly attack_spot:                 AttackSpot;
    readonly attack_spot_victory:         AttackSpotVictory;
    readonly grepolis_score:              GrepolisScore;
    readonly runtime_info:                RuntimeInfo;
    readonly market:                      FrontendBridgeMarket;
    readonly no_gold_dialog:              CashShop;
    readonly community_goal_reached:      CashShop;
    readonly turnovertokens:              Turnovertokens;
    readonly spawn:                       Spawn;
    readonly questlog:                    Questlog;
    readonly strategic_map_filter:        StrategicMapFilter;
    readonly color_picker:                ColorPicker;
    readonly custom_colors:               CustomColors;
    readonly cash_shop:                   CashShop;
    readonly world_wonder_donations:      WorldWonderDonations;
    readonly flippingimages:              CashShop;
    readonly colonization:                Colonization;
    readonly missions:                    Missions;
    readonly god_selection:               GodSelection;
    readonly domination:                  Domination;
    readonly notification_popup:          DominationEraStarted;
    readonly domination_era_started:      DominationEraStarted;
    readonly collected_items:             CollectedItems;
    readonly town_overlay:                TownOverlay;
    readonly gridevent:                   Gridevent;
    readonly blackfridaysale:             Blackfridaysale;
    readonly olympus_overview:            OlympusOverview;
    readonly olympus_temple_info:         OlympusTempleInfo;
    readonly olympus_ranking:             OlympusRanking;
    readonly rota:                        Rota;
    readonly world_wonders_info:          WorldWondersInfo;
    readonly tasksevent:                  Tasksevent;
    readonly fakeevent:                   Fakeevent;
    readonly affront:                     Affront;
    readonly city_list:                   CityList;
    readonly recruiting_list:             RecruitingList;
    readonly construction_list:           ConstructionList;
    readonly activities:                  Activities;
    readonly eventpass:                   Eventpass;
    readonly quizevent:                   Quizevent;
}

export type FrontendBridgeAcademy = {
    readonly research: Rese;
    readonly reset:    Rese;
}

export type Rese = {
    readonly templates:   ResearchTemplates;
    readonly models:      ResearchModels;
    readonly collections: ResearchCollections;
}

export type ResearchCollections = {
    readonly TownBuildings:  BuildingOrders;
    readonly TownResearches: BuildingOrders;
    readonly ResearchOrders: BuildingOrders;
    readonly BuildingOrders: BuildingOrders;
    readonly Towns:          BuildingOrders;
    readonly PlayerHeroes?:  BuildingOrders;
}

export type BuildingOrders = {
    readonly nofetch: boolean;
}

export type ResearchModels = {
    readonly Player:          BuildingOrders;
    readonly PlayerLedger:    BuildingOrders;
    readonly PremiumFeatures: BuildingOrders;
}

export type ResearchTemplates = {
    readonly index:             string;
    readonly techtree:          string;
    readonly queue:             string;
    readonly queue_instant_buy: string;
    readonly advisor_container: string;
    readonly no_building:       string;
}

export type Activities = {
    readonly running_powers:        RunningPowers;
    readonly running_temple_powers: RunningTemplePowers;
    readonly movements:             Movements;
    readonly temple_commands:       TempleCommands;
    readonly trades:                Trades;
}

export type Movements = {
    readonly templates:   MovementsTemplates;
    readonly models:      CollectionsClass;
    readonly collections: { [key: string]: BuildingOrders };
}

export type CollectionsClass = {
}

export type MovementsTemplates = {
    readonly activities_list: string;
    readonly movement:        string;
    readonly no_result:       string;
}

export type RunningPowers = {
    readonly templates:   RunningPowersTemplates;
    readonly models:      CollectionsClass;
    readonly collections: { [key: string]: BuildingOrders };
}

export type RunningPowersTemplates = {
    readonly activities_list: string;
    readonly running_power:   string;
    readonly no_result:       string;
}

export type RunningTemplePowers = {
    readonly templates:   RunningTemplePowersTemplates;
    readonly models:      CollectionsClass;
    readonly collections: { [key: string]: BuildingOrders };
}

export type RunningTemplePowersTemplates = {
    readonly activities_list:      string;
    readonly running_temple_power: string;
    readonly no_result:            string;
}

export type TempleCommands = {
    readonly templates:   TempleCommandsTemplates;
    readonly models:      CollectionsClass;
    readonly collections: { [key: string]: BuildingOrders };
}

export type TempleCommandsTemplates = {
    readonly activities_list: string;
    readonly temple_command:  string;
    readonly no_result:       string;
}

export type Trades = {
    readonly templates:   TradesTemplates;
    readonly models:      CollectionsClass;
    readonly collections: { [key: string]: BuildingOrders };
}

export type TradesTemplates = {
    readonly activities_list: string;
    readonly trade:           string;
    readonly no_result:       string;
}

export type Advent = {
    readonly index: AdventIndex;
}

export type AdventIndex = {
    readonly templates:   PurpleTemplates;
    readonly models:      PurpleModels;
    readonly collections: PurpleCollections;
}

export type PurpleCollections = {
    readonly AdventSpots:         CollectionsClass;
    readonly AdventCostModifiers: CollectionsClass;
}

export type PurpleModels = {
    readonly Advent:     CollectionsClass;
    readonly AdventTree: CollectionsClass;
}

export type PurpleTemplates = {
    readonly main:     string;
    readonly advisors: string;
    readonly wheel:    string;
}

export type Affront = {
    readonly index: AffrontIndex;
}

export type AffrontIndex = {
    readonly templates: FluffyTemplates;
}

export type FluffyTemplates = {
    readonly affront: string;
}

export type AttackSpot = {
    readonly index: AttackSpotIndex;
}

export type AttackSpotIndex = {
    readonly templates:   TentacledTemplates;
    readonly models:      FluffyModels;
    readonly collections: FluffyCollections;
}

export type FluffyCollections = {
    readonly Units:        BuildingOrders;
    readonly Towns:        BuildingOrders;
    readonly PlayerHeroes: BuildingOrders;
}

export type FluffyModels = {
    readonly PlayerAttackSpot: BuildingOrders;
    readonly PlayerGods:       BuildingOrders;
}

export type TentacledTemplates = {
    readonly index:       string;
    readonly unit_picker: string;
}

export type AttackSpotVictory = {
    readonly index: AttackSpotVictoryIndex;
}

export type AttackSpotVictoryIndex = {
    readonly templates:   StickyTemplates;
    readonly models:      TentacledModels;
    readonly collections: CollectionsClass;
}

export type TentacledModels = {
    readonly PlayerAttackSpot: BuildingOrders;
}

export type StickyTemplates = {
    readonly index: string;
}

export type Cks = {
    readonly index: BarracksIndex;
}

export type BarracksIndex = {
    readonly templates:   IndigoTemplates;
    readonly models:      StickyModels;
    readonly collections: TentacledCollections;
}

export type TentacledCollections = {
    readonly Benefits:            CollectionsClass;
    readonly WorldBoosts:         BuildingOrders;
    readonly Towns:               BuildingOrders;
    readonly TownResearches:      BuildingOrders;
    readonly RemainingUnitOrders: BuildingOrders;
    readonly FeatureBlocks:       BuildingOrders;
}

export type StickyModels = {
    readonly PlayerLedger:       BuildingOrders;
    readonly PremiumFeatures:    BuildingOrders;
    readonly PhoenicianSalesman: CollectionsClass;
}

export type IndigoTemplates = {
    readonly index:          string;
    readonly unit_order_box: string;
    readonly unit_details:   string;
    readonly orders:         string;
    readonly banners:        string;
    readonly no_barracks:    string;
    readonly units_tabs:     string;
}

export type Blackfridaysale = {
    readonly index: BlackfridaysaleIndex;
}

export type BlackfridaysaleIndex = {
    readonly templates:   IndecentTemplates;
    readonly models:      CollectionsClass;
    readonly collections: CollectionsClass;
}

export type IndecentTemplates = {
    readonly black_friday: string;
}

export type CashShop = {
    readonly index: CashShopIndex;
}

export type CashShopIndex = {
    readonly templates:   StickyTemplates;
    readonly models:      CollectionsClass;
    readonly collections: CollectionsClass;
}

export type CityList = {
    readonly index: CityListIndex;
}

export type CityListIndex = {
    readonly templates:   HilariousTemplates;
    readonly models:      CollectionsClass;
    readonly collections: StickyCollections;
}

export type StickyCollections = {
    readonly TownGroups:     BuildingOrders;
    readonly TownGroupTowns: BuildingOrders;
    readonly Attacks:        BuildingOrders;
    readonly Supports:       BuildingOrders;
    readonly IslandQuests:   BuildingOrders;
}

export type HilariousTemplates = {
    readonly city_list:  string;
    readonly town_group: string;
    readonly city:       string;
}

export type CollectedItems = {
    readonly index: CollectedItemsIndex;
}

export type CollectedItemsIndex = {
    readonly templates:   AmbitiousTemplates;
    readonly models:      CollectionsClass;
    readonly collections: IndigoCollections;
}

export type IndigoCollections = {
    readonly CollectedItems: BuildingOrders;
}

export type AmbitiousTemplates = {
    readonly collected_items: string;
}

export type Colonization = {
    readonly index: ColonizationIndex;
}

export type ColonizationIndex = {
    readonly templates:   CunningTemplates;
    readonly models:      IndigoModels;
    readonly collections: FluffyCollections;
}

export type IndigoModels = {
    readonly Colonization: CollectionsClass;
    readonly PlayerGods:   BuildingOrders;
}

export type CunningTemplates = {
    readonly index:                   string;
    readonly unit_picker:             string;
    readonly tooltip_colonizing_info: string;
    readonly tooltip_island_info:     string;
    readonly requirements:            string;
}

export type ColorPicker = {
    readonly index: ColorPickerIndex;
}

export type ColorPickerIndex = {
    readonly templates:   StickyTemplates;
    readonly models:      CollectionsClass;
    readonly collections: IndecentCollections;
}

export type IndecentCollections = {
    readonly CustomColors: BuildingOrders;
}

export type ConstructionList = {
    readonly index: ConstructionListIndex;
}

export type ConstructionListIndex = {
    readonly templates:   MagentaTemplates;
    readonly models:      IndecentModels;
    readonly collections: HilariousCollections;
}

export type HilariousCollections = {
    readonly BuildingOrders: BuildingOrders;
    readonly FeatureBlocks:  BuildingOrders;
    readonly Towns:          BuildingOrders;
}

export type IndecentModels = {
    readonly PremiumFeatures: BuildingOrders;
}

export type MagentaTemplates = {
    readonly construction_list:        string;
    readonly construction_order_entry: string;
    readonly construction_order_empty: string;
}

export type CRMInterstitial = {
    readonly index: CRMInterstitialIndex;
}

export type CRMInterstitialIndex = {
    readonly templates:   FriskyTemplates;
    readonly models:      CollectionsClass;
    readonly collections: CollectionsClass;
}

export type FriskyTemplates = {
    readonly crm_index: string;
}

export type CRMScreen = {
    readonly index: CRMScreenIndex;
}

export type CRMScreenIndex = {
    readonly templates:   MischievousTemplates;
    readonly models:      CollectionsClass;
    readonly collections: CollectionsClass;
}

export type MischievousTemplates = {
    readonly screen_content: string;
}

export type CustomColors = {
    readonly index: CustomColorsIndex;
}

export type CustomColorsIndex = {
    readonly templates:   BraggadociousTemplates;
    readonly models:      HilariousModels;
    readonly collections: IndecentCollections;
}

export type HilariousModels = {
    readonly Player: BuildingOrders;
}

export type BraggadociousTemplates = {
    readonly index: string;
    readonly item:  string;
}

export type DailyLogin = {
    readonly index: DailyLoginIndex;
}

export type DailyLoginIndex = {
    readonly templates:   Templates1;
    readonly models:      AmbitiousModels;
    readonly collections: CollectionsClass;
}

export type AmbitiousModels = {
    readonly DailyLoginBonus: CollectionsClass;
}

export type Templates1 = {
    readonly index:                      string;
    readonly reward_favor:               string;
    readonly reward_resources:           string;
    readonly mystery_box:                string;
    readonly daily_login_days_tooltip:   string;
    readonly daily_login_goblet_tooltip: string;
}

export type Dialog = {
    readonly info_all_towns_in_one_group:                          Info;
    readonly info_attack_planner_help:                             InfoAttackPlannerHelp;
    readonly info_create_first_town_group:                         Info;
    readonly info_mass_recruit_help:                               Info;
    readonly info_phoenician_salesman_help:                        Info;
    readonly info_cap_of_invisibility_not_possible_help:           Info;
    readonly go_to_page_default:                                   GoToPageDefault;
    readonly save_coordinates_default:                             SaveCoordinatesDefault;
    readonly interstitial_default:                                 InterstitialDefault;
    readonly confirmation_window_default:                          ConfirmationWindowDefault;
    readonly not_enough_gold_window_default:                       NotEnoughGoldWindowDefault;
    readonly not_enough_gold_window_building_build_cost_reduction: NotEnoughGoldWindowBuildingBuildCostReduction;
    readonly not_enough_gold_window_buy_advisor:                   NotEnoughGoldWindowBuyAdvisor;
    readonly not_enough_gold_window_building_build_time:           NotEnoughGoldWindowBuildingBuildTime;
    readonly not_enough_gold_window_research_build_time:           NotEnoughGoldWindowResearchBuildTime;
    readonly not_enough_gold_window_unit_orders:                   NotEnoughGoldWindowUnitOrders;
    readonly not_enough_gold_window_celebrate_olympic_games:       NotEnoughGoldWindowCelebrateOlympicGames;
}

export type ConfirmationWindowDefault = {
    readonly templates: ConfirmationWindowDefaultTemplates;
}

export type ConfirmationWindowDefaultTemplates = {
    readonly confirmation_window:        string;
    readonly fatal_attack_warning:       string;
    readonly god_selection_confirmation: string;
    readonly cast_spell_confirmation:    string;
}

export type GoToPageDefault = {
    readonly templates: GoToPageDefaultTemplates;
}

export type GoToPageDefaultTemplates = {
    readonly go_to_page_window: string;
}

export type Info = {
    readonly templates: InfoAllTownsInOneGroupTemplates;
}

export type InfoAllTownsInOneGroupTemplates = {
    readonly default_tmpl: string;
}

export type InfoAttackPlannerHelp = {
    readonly templates: InfoAttackPlannerHelpTemplates;
}

export type InfoAttackPlannerHelpTemplates = {
    readonly info_attack_planner: string;
}

export type InterstitialDefault = {
    readonly templates: InterstitialDefaultTemplates;
}

export type InterstitialDefaultTemplates = {
    readonly welcome_screen:   string;
    readonly animated_welcome: string;
}

export type NotEnoughGoldWindowBuildingBuildCostReduction = {
    readonly templates: NotEnoughGoldWindowBuildingBuildCostReductionTemplates;
}

export type NotEnoughGoldWindowBuildingBuildCostReductionTemplates = {
    readonly not_enough_gold_window_building_build_cost_reduction: string;
}

export type NotEnoughGoldWindowBuildingBuildTime = {
    readonly templates: NotEnoughGoldWindowBuildingBuildTimeTemplates;
}

export type NotEnoughGoldWindowBuildingBuildTimeTemplates = {
    readonly not_enough_gold_window_building_build_time: string;
}

export type NotEnoughGoldWindowBuyAdvisor = {
    readonly templates: NotEnoughGoldWindowBuyAdvisorTemplates;
}

export type NotEnoughGoldWindowBuyAdvisorTemplates = {
    readonly not_enough_gold_window_buy_advisor: string;
}

export type NotEnoughGoldWindowCelebrateOlympicGames = {
    readonly templates: NotEnoughGoldWindowCelebrateOlympicGamesTemplates;
}

export type NotEnoughGoldWindowCelebrateOlympicGamesTemplates = {
    readonly not_enough_gold_window_celebrate_olympic_games: string;
}

export type NotEnoughGoldWindowDefault = {
    readonly templates: NotEnoughGoldWindowDefaultTemplates;
}

export type NotEnoughGoldWindowDefaultTemplates = {
    readonly not_enough_gold_window_default: string;
}

export type NotEnoughGoldWindowResearchBuildTime = {
    readonly templates: NotEnoughGoldWindowResearchBuildTimeTemplates;
}

export type NotEnoughGoldWindowResearchBuildTimeTemplates = {
    readonly not_enough_gold_window_research_build_time: string;
}

export type NotEnoughGoldWindowUnitOrders = {
    readonly templates: NotEnoughGoldWindowUnitOrdersTemplates;
}

export type NotEnoughGoldWindowUnitOrdersTemplates = {
    readonly not_enough_gold_window_unit_orders: string;
}

export type SaveCoordinatesDefault = {
    readonly templates: SaveCoordinatesDefaultTemplates;
}

export type SaveCoordinatesDefaultTemplates = {
    readonly save_coordinates: string;
}

export type Domination = {
    readonly info:    DominationInfo;
    readonly status:  Status;
    readonly ranking: DominationRanking;
}

export type DominationInfo = {
    readonly templates:   Templates2;
    readonly models:      CunningModels;
    readonly collections: CollectionsClass;
}

export type CunningModels = {
    readonly DominationStatus: CollectionsClass;
    readonly Player:           BuildingOrders;
}

export type Templates2 = {
    readonly domination_info:          string;
    readonly pre_domination_progress:  string;
    readonly domination_progress:      string;
    readonly domination_rules:         string;
    readonly post_domination_progress: string;
    readonly post_domination_footer:   string;
    readonly player_ranks_tooltip:     string;
}

export type DominationRanking = {
    readonly templates:   Templates3;
    readonly models:      CollectionsClass;
    readonly collections: IndecentCollections;
}

export type Templates3 = {
    readonly domination_ranking: string;
    readonly winner_pedestal:    string;
}

export type Status = {
    readonly templates:   StatusTemplates;
    readonly models:      CollectionsClass;
    readonly collections: StatusCollections;
}

export type StatusCollections = {
    readonly AllianceStatusDominations: CollectionsClass;
    readonly CustomColors:              BuildingOrders;
    readonly Benefits:                  BuildingOrders;
}

export type StatusTemplates = {
    readonly domination_status:     string;
    readonly alliance_status:       string;
    readonly alliance_status_empty: string;
    readonly world_status:          string;
    readonly last_stand:            string;
}

export type DominationEraStarted = {
    readonly index: DominationEraStartedIndex;
}

export type DominationEraStartedIndex = {
    readonly templates:   Templates4;
    readonly models:      HilariousModels;
    readonly collections: CollectionsClass;
}

export type Templates4 = {
    readonly notification_popup: string;
}

export type FrontendBridgeEaster = {
    readonly alchemy: Alchemy;
    readonly recipes: Recipes;
}

export type Alchemy = {
    readonly templates:   AlchemyTemplates;
    readonly models:      AlchemyModels;
    readonly collections: AlchemyCollections;
}

export type AlchemyCollections = {
    readonly EasterCostModifiers: CollectionsClass;
    readonly EasterIngredients:   CollectionsClass;
    readonly EasterRecipes:       CollectionsClass;
    readonly PlayerHints:         CollectionsClass;
}

export type AlchemyModels = {
    readonly Easter:        CollectionsClass;
    readonly EasterRanking: CollectionsClass;
    readonly EasterStats:   CollectionsClass;
}

export type AlchemyTemplates = {
    readonly tab_alchemy:                string;
    readonly progressbar:                string;
    readonly progressbar_tooltip:        string;
    readonly ingredients_box:            string;
    readonly tutorial:                   string;
    readonly reward_overlay:             string;
    readonly ranking:                    string;
    readonly tooltip_daily_progress:     string;
    readonly sub_window_daily_ranking:   string;
    readonly sub_window_overall_ranking: string;
    readonly ranking_tooltip:            string;
}

export type Recipes = {
    readonly templates:   RecipesTemplates;
    readonly models:      RecipesModels;
    readonly collections: AlchemyCollections;
}

export type RecipesModels = {
    readonly Easter: CollectionsClass;
}

export type RecipesTemplates = {
    readonly tab_recipes:  string;
    readonly recipes_list: string;
}

export type EasterCollect = {
    readonly index: EasterCollectIndex;
}

export type EasterCollectIndex = {
    readonly templates:   Templates5;
    readonly models:      RecipesModels;
    readonly collections: AmbitiousCollections;
}

export type AmbitiousCollections = {
    readonly EasterDroppedIngredients: BuildingOrders;
    readonly PlayerHints:              CollectionsClass;
}

export type Templates5 = {
    readonly main: string;
}

export type Eventpass = {
    readonly event_pass: EventpassEventPass;
}

export type EventpassEventPass = {
    readonly templates:   EventPassTemplates;
    readonly models:      MagentaModels;
    readonly collections: EventPassCollections;
}

export type EventPassCollections = {
    readonly PlayerEventPassRewards: CollectionsClass;
}

export type MagentaModels = {
    readonly PlayerEventPass:                   CollectionsClass;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
}

export type EventPassTemplates = {
    readonly event_pass_main:             string;
    readonly event_pass_tutorial:         string;
    readonly event_pass_activation_popup: string;
}

export type Fakeevent = {
    readonly index: FakeeventIndex;
}

export type FakeeventIndex = {
    readonly templates: Templates5;
}

export type FrontendBridgeFarmTown = {
    readonly index: FarmTownIndex;
}

export type FarmTownIndex = {
    readonly templates:   Templates6;
    readonly models:      FriskyModels;
    readonly collections: CunningCollections;
}

export type CunningCollections = {
    readonly FarmTownPlayerRelations: BuildingOrders;
    readonly FarmTowns:               BuildingOrders;
    readonly Towns:                   BuildingOrders;
    readonly CastedPowers:            BuildingOrders;
}

export type FriskyModels = {
    readonly PlayerKillpoints: BuildingOrders;
    readonly PremiumFeatures:  BuildingOrders;
}

export type Templates6 = {
    readonly index:                  string;
    readonly card:                   string;
    readonly locked_card:            string;
    readonly trading:                string;
    readonly locked:                 string;
    readonly upgrade_button_tooltip: string;
    readonly advisor_container:      string;
    readonly claim_tooltip:          string;
}

export type GiftsWelcome = {
    readonly index: GiftsWelcomeIndex;
}

export type GiftsWelcomeIndex = {
    readonly templates:   Templates7;
    readonly models:      CollectionsClass;
    readonly collections: CollectionsClass;
}

export type Templates7 = {
    readonly main: string;
    readonly gift: string;
}

export type GodSelection = {
    readonly index:                 GodSelectionIndex;
    readonly artifacts:             GodSelectionArtifacts;
    readonly artifacts_with_levels: ArtifactsWithLevels;
}

export type GodSelectionArtifacts = {
    readonly templates:   ArtifactsTemplates;
    readonly models:      ArtifactsModels;
    readonly collections: CollectionsClass;
}

export type ArtifactsModels = {
    readonly Player:     BuildingOrders;
    readonly PlayerGods: BuildingOrders;
}

export type ArtifactsTemplates = {
    readonly artifacts:     string;
    readonly artifact_card: string;
}

export type ArtifactsWithLevels = {
    readonly templates:   ArtifactsTemplates;
    readonly models:      ArtifactsModels;
    readonly collections: ArtifactsWithLevelsCollections;
}

export type ArtifactsWithLevelsCollections = {
    readonly PlayerArtifacts: CollectionsClass;
}

export type GodSelectionIndex = {
    readonly templates:   Templates8;
    readonly models:      MischievousModels;
    readonly collections: AllOffersCollections;
}

export type AllOffersCollections = {
    readonly Towns: BuildingOrders;
}

export type MischievousModels = {
    readonly PlayerGods:      BuildingOrders;
    readonly PremiumFeatures: BuildingOrders;
}

export type Templates8 = {
    readonly index:       string;
    readonly description: string;
    readonly no_building: string;
}

export type GrepolisScore = {
    readonly index: GrepolisScoreIndex;
}

export type GrepolisScoreIndex = {
    readonly templates:   Templates9;
    readonly models:      BraggadociousModels;
    readonly collections: MagentaCollections;
}

export type MagentaCollections = {
    readonly PlayerAwards:            BuildingOrders;
    readonly GrepoScoreCategoryHashs: BuildingOrders;
    readonly Benefits:                BuildingOrders;
}

export type BraggadociousModels = {
    readonly GrepoScore: BuildingOrders;
}

export type Templates9 = {
    readonly index:              string;
    readonly world_points_sizer: string;
    readonly world_points:       string;
    readonly category_page:      string;
    readonly summary:            string;
    readonly award_tooltip:      string;
}

export type Grepolympia = {
    readonly matches:  Matches;
    readonly info:     GrepolympiaInfo;
    readonly training: Training;
    readonly ranking:  GrepolympiaRanking;
    readonly shop:     GrepolympiaShop;
}

export type GrepolympiaInfo = {
    readonly templates:   Templates10;
    readonly models:      TrainingModels;
    readonly collections: InfoCollections;
}

export type InfoCollections = {
    readonly PlayerAwards:        BuildingOrders;
    readonly PlayerHints:         BuildingOrders;
    readonly GrepolympiaRankings: CollectionsClass;
}

export type TrainingModels = {
    readonly GrepolympiaAthlete:            CollectionsClass;
    readonly GrepolympiaDiscipline:         CollectionsClass;
    readonly GrepolympiaDisciplineRanking?: CollectionsClass;
    readonly Grepolympia:                   CollectionsClass;
    readonly PlayerLedger:                  BuildingOrders;
}

export type Templates10 = {
    readonly page_info:         string;
    readonly tooltip_award:     string;
    readonly attend_info_popup: string;
    readonly current_ranking:   string;
    readonly awards:            string;
    readonly rewards:           string;
    readonly alliance_score:    string;
    readonly tutorial:          string;
    readonly tooltip_power:     string;
    readonly reward_tooltip:    string;
}

export type Matches = {
    readonly templates:   MatchesTemplates;
    readonly models:      MatchesModels;
    readonly collections: CollectionsClass;
}

export type MatchesModels = {
    readonly Grepolympia:           CollectionsClass;
    readonly GrepolympiaDiscipline: CollectionsClass;
    readonly GrepolympiaMatch:      CollectionsClass;
    readonly PlayerLedger:          BuildingOrders;
}

export type MatchesTemplates = {
    readonly page_matches:    string;
    readonly table_header:    string;
    readonly table_row:       string;
    readonly ranking_tooltip: string;
}

export type GrepolympiaRanking = {
    readonly templates:   Templates11;
    readonly models:      Models1;
    readonly collections: FriskyCollections;
}

export type FriskyCollections = {
    readonly GrepolympiaRankings: CollectionsClass;
}

export type Models1 = {
    readonly GrepolympiaDisciplineRanking: CollectionsClass;
    readonly GrepolympiaDiscipline:        CollectionsClass;
    readonly Grepolympia:                  CollectionsClass;
}

export type Templates11 = {
    readonly page_ranking: string;
    readonly ranking_list: string;
}

export type GrepolympiaShop = {
    readonly templates:   ShopTemplates;
    readonly models:      Models2;
    readonly collections: MischievousCollections;
}

export type MischievousCollections = {
    readonly GrepolympiaShopItems: CollectionsClass;
}

export type Models2 = {
    readonly PlayerLedger:          BuildingOrders;
    readonly GrepolympiaDiscipline: CollectionsClass;
}

export type ShopTemplates = {
    readonly shop:      string;
    readonly shop_item: string;
}

export type Training = {
    readonly templates:   TrainingTemplates;
    readonly models:      TrainingModels;
    readonly collections: TrainingCollections;
}

export type TrainingCollections = {
    readonly GrepolympiaRankings: CollectionsClass;
    readonly TrainingOrders:      CollectionsClass;
}

export type TrainingTemplates = {
    readonly training:        string;
    readonly discipline:      string;
    readonly skills:          string;
    readonly top_ranking:     string;
    readonly training_ground: string;
}

export type Grepolympiashop = {
    readonly ranking: GrepolympiashopRanking;
    readonly shop:    GrepolympiaShop;
}

export type GrepolympiashopRanking = {
    readonly templates:   Templates11;
    readonly models:      Models3;
    readonly collections: FriskyCollections;
}

export type Models3 = {
    readonly GrepolympiaDisciplineRanking: CollectionsClass;
    readonly Grepolympia:                  CollectionsClass;
}

export type Gridevent = {
    readonly index:      GrideventIndex;
    readonly event_pass: GrideventEventPass;
}

export type GrideventEventPass = {
    readonly templates:   EventPassTemplates;
    readonly models:      Models4;
    readonly collections: EventPassCollections;
}

export type Models4 = {
    readonly PlayerGrid:                        CollectionsClass;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
    readonly PlayerEventPass:                   CollectionsClass;
}

export type GrideventIndex = {
    readonly templates:   Templates12;
    readonly models:      Models5;
    readonly collections: BraggadociousCollections;
}

export type BraggadociousCollections = {
    readonly PlayerGridFigureRewards: CollectionsClass;
    readonly PlayerGridTurns:         CollectionsClass;
    readonly GridEventShopItems:      CollectionsClass;
    readonly GridEventInventoryItems: CollectionsClass;
    readonly PlayerEventPassRewards:  CollectionsClass;
}

export type Models5 = {
    readonly PlayerLedger:                      BuildingOrders;
    readonly PlayerGrid:                        CollectionsClass;
    readonly GridEventCollectedItemCount:       CollectionsClass;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
    readonly PlayerEventPass:                   CollectionsClass;
}

export type Templates12 = {
    readonly main:                       string;
    readonly figure_reward:              string;
    readonly player_grid:                string;
    readonly player_grid_cell_content:   string;
    readonly shop:                       string;
    readonly shop_item:                  string;
    readonly info_icon_tooltip:          string;
    readonly rewards_list:               string;
    readonly rewards_list_reward:        string;
    readonly reward:                     string;
    readonly indicator_tooltip:          string;
    readonly grand_prize_reward_display: string;
    readonly grand_prize_journey:        string;
    readonly tutorial:                   string;
    readonly progression_movement:       string;
}

export type Hercules2014 = {
    readonly index: Hercules2014Index;
}

export type Hercules2014Index = {
    readonly templates:   Templates13;
    readonly models:      Models6;
    readonly collections: Collections1;
}

export type Collections1 = {
    readonly CampaignPlayerStages: CollectionsClass;
    readonly PlayerHints:          CollectionsClass;
    readonly CampaignDroppedUnits: BuildingOrders;
}

export type Models6 = {
    readonly CampaignRanking:    CollectionsClass;
    readonly CampaignPlayerArmy: CollectionsClass;
    readonly Campaign:           CollectionsClass;
}

export type Templates13 = {
    readonly main:                       string;
    readonly mercenary:                  string;
    readonly mercenary_tooltip:          string;
    readonly healer:                     string;
    readonly stage:                      string;
    readonly sub_window_attack:          string;
    readonly sub_window_fight_result:    string;
    readonly sub_window_last_stage_info: string;
    readonly reward_container:           string;
    readonly stage_tooltip:              string;
    readonly banner:                     string;
    readonly fight_animation:            string;
    readonly event_info:                 string;
    readonly tutorial:                   string;
    readonly collecting_tooltip:         string;
    readonly healer_tooltip:             string;
    readonly hercules_tooltip:           string;
    readonly ranking:                    string;
    readonly sub_window_daily_ranking:   string;
    readonly sub_window_overall_ranking: string;
    readonly hero_box:                   string;
}

export type Hercules2014Collect = {
    readonly index: Hercules2014CollectIndex;
}

export type Hercules2014CollectIndex = {
    readonly templates:   Templates14;
    readonly models:      CollectionsClass;
    readonly collections: Collections2;
}

export type Collections2 = {
    readonly CampaignDroppedUnits: BuildingOrders;
    readonly PlayerHints:          CollectionsClass;
}

export type Templates14 = {
    readonly hercules2014_index: string;
}

export type Heroes = {
    readonly overview:   Overview;
    readonly council:    Council;
    readonly collection: HeroesCollection;
}

export type HeroesCollection = {
    readonly templates:   Templates15;
    readonly models:      CollectionsClass;
    readonly collections: CouncilCollections;
}

export type CouncilCollections = {
    readonly PlayerHeroes: CollectionsClass;
}

export type Templates15 = {
    readonly collection_main: string;
    readonly heroes_list:     string;
}

export type Council = {
    readonly templates:   CouncilTemplates;
    readonly models:      CouncilModels;
    readonly collections: CouncilCollections;
}

export type CouncilModels = {
    readonly PlayerLedger:      BuildingOrders;
    readonly Heroes:            CollectionsClass;
    readonly HeroesRecruitment: CollectionsClass;
}

export type CouncilTemplates = {
    readonly council_main:      string;
    readonly exchange_currency: string;
}

export type Overview = {
    readonly templates:   OverviewTemplates;
    readonly models:      CouncilModels;
    readonly collections: OverviewCollections;
}

export type OverviewCollections = {
    readonly PlayerHeroes:  CollectionsClass;
    readonly FeatureBlocks: BuildingOrders;
}

export type OverviewTemplates = {
    readonly main:                  string;
    readonly buy_hero_slot_buttons: string;
    readonly exchange_currency:     string;
    readonly tooltip_with_arrow:    string;
    readonly instant_buy_tooltip:   string;
}

export type HeroesTrain = {
    readonly index: HeroesTrainIndex;
}

export type HeroesTrainIndex = {
    readonly templates:   Templates16;
    readonly models:      Models7;
    readonly collections: CollectionsClass;
}

export type Models7 = {
    readonly PlayerLedger: BuildingOrders;
    readonly Heroes:       CollectionsClass;
    readonly PlayerHero:   BuildingOrders;
}

export type Templates16 = {
    readonly heroes_train: string;
}

export type HeroesWelcome = {
    readonly welcome: HeroesWelcomeWelcome;
}

export type HeroesWelcomeWelcome = {
    readonly templates:   WelcomeTemplates;
    readonly models:      CollectionsClass;
    readonly collections: CouncilCollections;
}

export type WelcomeTemplates = {
    readonly welcome_window: string;
}

export type FrontendBridgeHide = {
    readonly index: HideIndex;
}

export type HideIndex = {
    readonly templates:   Templates17;
    readonly models:      CollectionsClass;
    readonly collections: Collections3;
}

export type Collections3 = {
    readonly LastSpyReports: CollectionsClass;
    readonly Towns:          BuildingOrders;
    readonly MovementsSpys:  BuildingOrders;
}

export type Templates17 = {
    readonly building_hide: string;
    readonly no_building:   string;
}

export type FrontendBridgeInventory = {
    readonly index: InventoryIndex;
}

export type InventoryIndex = {
    readonly templates:   Templates18;
    readonly models:      Models8;
    readonly collections: Collections4;
}

export type Collections4 = {
    readonly InventoryItems:        BuildingOrders;
    readonly PremiumInventoryItems: CollectionsClass;
}

export type Models8 = {
    readonly Inventory:    BuildingOrders;
    readonly PlayerLedger: BuildingOrders;
}

export type Templates18 = {
    readonly index: string;
    readonly slot:  string;
}

export type FrontendBridgeMarket = {
    readonly own_offers:       OwnOffers;
    readonly all_offers:       AllOffers;
    readonly create:           Create;
    readonly premium_exchange: PremiumExchange;
}

export type AllOffers = {
    readonly templates:   AllOffersTemplates;
    readonly models:      CollectionsClass;
    readonly collections: AllOffersCollections;
}

export type AllOffersTemplates = {
    readonly all_offers:                string;
    readonly other_offer_row:           string;
    readonly offer_details:             string;
    readonly no_foreign_offers_message: string;
    readonly confirm_order:             string;
    readonly no_building:               string;
}

export type Create = {
    readonly templates:   CreateTemplates;
    readonly models:      CreateModels;
    readonly collections: AllOffersCollections;
}

export type CreateModels = {
    readonly CreateOffers: CollectionsClass;
    readonly PlayerLedger: BuildingOrders;
}

export type CreateTemplates = {
    readonly create_offer: string;
    readonly no_building:  string;
}

export type OwnOffers = {
    readonly templates:   OwnOffersTemplates;
    readonly models:      CollectionsClass;
    readonly collections: AllOffersCollections;
}

export type OwnOffersTemplates = {
    readonly own_offers:            string;
    readonly own_offer_row:         string;
    readonly own_offer_row_tooltip: string;
    readonly offer_details:         string;
    readonly no_building:           string;
    readonly no_own_offers_message: string;
}

export type PremiumExchange = {
    readonly templates:   PremiumExchangeTemplates;
    readonly models:      CollectionsClass;
    readonly collections: AllOffersCollections;
}

export type PremiumExchangeTemplates = {
    readonly premium_exchange: string;
    readonly tab_buy_sell:     string;
    readonly rules:            string;
    readonly resource:         string;
    readonly confirm_order:    string;
    readonly no_building:      string;
}

export type Welcome = {
    readonly index: MilitiaWelcomeIndex;
}

export type MilitiaWelcomeIndex = {
    readonly templates:   Templates5;
    readonly models:      CollectionsClass;
    readonly collections: CollectionsClass;
}

export type Missions = {
    readonly index:      MissionsIndex;
    readonly collection: MissionsCollection;
}

export type MissionsCollection = {
    readonly templates:   Templates19;
    readonly models:      CollectionModels;
    readonly collections: Collections5;
}

export type Collections5 = {
    readonly Benefits:             CollectionsClass;
    readonly PlayerHints:          BuildingOrders;
    readonly MissionsExtraRewards: CollectionsClass;
}

export type CollectionModels = {
    readonly MissionStatus:         CollectionsClass;
    readonly MissionsRanking:       CollectionsClass;
    readonly MissionsPlayerRanking: CollectionsClass;
    readonly MissionReport:         CollectionsClass;
    readonly MissionRewards:        CollectionsClass;
    readonly PlayerLedger:          BuildingOrders;
}

export type Templates19 = {
    readonly collection:          string;
    readonly collect_reward:      string;
    readonly rewards_list:        string;
    readonly rewards_list_reward: string;
    readonly tutorial:            string;
    readonly ranking:             string;
    readonly ranking_rewards:     string;
    readonly overall_ranking:     string;
}

export type MissionsIndex = {
    readonly templates:   Templates20;
    readonly models:      Models9;
    readonly collections: Collections6;
}

export type Collections6 = {
    readonly Benefits: CollectionsClass;
    readonly Towns:    BuildingOrders;
    readonly Missions: CollectionsClass;
}

export type Models9 = {
    readonly MissionStatus:      CollectionsClass;
    readonly PlayerLedger:       BuildingOrders;
    readonly MissionReport:      CollectionsClass;
    readonly MissionsUnitData:   CollectionsClass;
    readonly MissionsPlayerArmy: BuildingOrders;
}

export type Templates20 = {
    readonly index:             string;
    readonly mission:           string;
    readonly mission_running:   string;
    readonly details:           string;
    readonly info:              string;
    readonly send_units:        string;
    readonly unit_picker:       string;
    readonly progress:          string;
    readonly mission_result:    string;
    readonly buy_unit:          string;
    readonly indicator_tooltip: string;
    readonly unit_card:         string;
}

export type MobileTutorial = {
    readonly index: MobileTutorialIndex;
}

export type MobileTutorialIndex = {
    readonly templates:   Templates5;
    readonly models:      CollectionsClass;
    readonly collections: Collections7;
}

export type Collections7 = {
    readonly PlayerHints: PlayerHints;
}

export type PlayerHints = {
    readonly notfetch: boolean;
}

export type Notes = {
    readonly note1: Note;
    readonly note2: Note;
    readonly note3: Note;
    readonly note4: Note;
    readonly note5: Note;
}

export type Note = {
    readonly templates:   Note1Templates;
    readonly models:      CollectionsClass;
    readonly collections: Note1Collections;
}

export type Note1Collections = {
    readonly PlayerNotes: CollectionsClass;
}

export type Note1Templates = {
    readonly edit:                   string;
    readonly preview:                string;
    readonly sub_window_new_note:    string;
    readonly sub_window_rename_note: string;
    readonly sub_window_delete_note: string;
}

export type OlympusOverview = {
    readonly info:          OlympusOverviewInfo;
    readonly small_temples: SmallTemples;
    readonly large_temples: LargeTemples;
    readonly olympus:       Olympus;
}

export type OlympusOverviewInfo = {
    readonly templates:   Templates21;
    readonly models:      LargeTemplesModels;
    readonly collections: CollectionsClass;
}

export type LargeTemplesModels = {
    readonly Olympus: BuildingOrders;
}

export type Templates21 = {
    readonly overview_info:               string;
    readonly overview_info_header:        string;
    readonly rules:                       string;
    readonly player_ranks_tooltip:        string;
    readonly overview_post_temple_header: string;
}

export type LargeTemples = {
    readonly templates:   LargeTemplesTemplates;
    readonly models:      LargeTemplesModels;
    readonly collections: LargeTemplesCollections;
}

export type LargeTemplesCollections = {
    readonly Temples:      BuildingOrders;
    readonly CustomColors: BuildingOrders;
}

export type LargeTemplesTemplates = {
    readonly overview_large_temples:        string;
    readonly overview_large_temples_header: string;
    readonly large_temple_list_item:        string;
    readonly large_temple_list_slider:      string;
    readonly large_temple_silhouette:       string;
    readonly alliance_flag:                 string;
    readonly overview_post_temple_header:   string;
}

export type Olympus = {
    readonly templates:   OlympusTemplates;
    readonly models:      LargeTemplesModels;
    readonly collections: LargeTemplesCollections;
}

export type OlympusTemplates = {
    readonly overview_olympus:            string;
    readonly overview_olympus_header:     string;
    readonly overview_post_temple_header: string;
    readonly alliance_flag:               string;
}

export type SmallTemples = {
    readonly templates:   SmallTemplesTemplates;
    readonly models:      LargeTemplesModels;
    readonly collections: SmallTemplesCollections;
}

export type SmallTemplesCollections = {
    readonly Temples: BuildingOrders;
}

export type SmallTemplesTemplates = {
    readonly overview_small_temples:        string;
    readonly overview_small_temples_header: string;
    readonly small_temple_row:              string;
    readonly filters:                       string;
    readonly overview_post_temple_header:   string;
}

export type OlympusRanking = {
    readonly index: RankingClass;
}

export type RankingClass = {
    readonly templates:   Templates22;
    readonly models:      Models10;
    readonly collections: IndecentCollections;
}

export type Models10 = {
    readonly OlympusRanking: CollectionsClass;
    readonly Player:         BuildingOrders;
}

export type Templates22 = {
    readonly ranking:             string;
    readonly flags_in_background: string;
}

export type OlympusTempleInfo = {
    readonly index:          PurpleIndex;
    readonly temple_defense: TempleDefense;
    readonly ranking:        RankingClass;
}

export type PurpleIndex = {
    readonly templates:   Templates23;
    readonly models:      Models11;
    readonly collections: LargeTemplesCollections;
}

export type Models11 = {
    readonly TempleInfo: CollectionsClass;
    readonly Olympus:    BuildingOrders;
}

export type Templates23 = {
    readonly temple_info:               string;
    readonly command:                   string;
    readonly revolt:                    string;
    readonly temple_info_image:         string;
    readonly temple_info_image_olympus: string;
    readonly olympus_curse:             string;
    readonly temple_powers_overlay:     string;
}

export type TempleDefense = {
    readonly templates:   TempleDefenseTemplates;
    readonly models:      TempleDefenseModels;
    readonly collections: SmallTemplesCollections;
}

export type TempleDefenseModels = {
    readonly TempleInfo: CollectionsClass;
}

export type TempleDefenseTemplates = {
    readonly temple_defense:              string;
    readonly defense_list_item:           string;
    readonly temple_defense_slot_wrapper: string;
}

export type FrontendBridgePlace = {
    readonly support_overview_support_for_active_town:      SupportOverviewSupportForActiveTown;
    readonly support_overview_active_town_supports_towns:   SupportOverviewActiveTownSupportsTowns;
    readonly support_overview_active_player_supports_towns: SupportOverviewActivePlayerSupportsTowns;
    readonly support_overview_active_player_supports_town:  SupportOverviewActivePlayerSupportsTown;
}

export type SupportOverviewActivePlayerSupportsTown = {
    readonly templates:   SupportOverviewActivePlayerSupportsTownTemplates;
    readonly models:      SupportOverviewActivePlayerSupportsTownModels;
    readonly collections: SupportOverviewActivePlayerSupportsTownCollections;
}

export type SupportOverviewActivePlayerSupportsTownCollections = {
    readonly ActivePlayerSupportsTown: ActivePlayerSupportsTown;
}

export type ActivePlayerSupportsTown = {
    readonly arguments: Arguments;
}

export type Arguments = {
    readonly town_id: string;
}

export type SupportOverviewActivePlayerSupportsTownModels = {
    readonly ConstrainedTown: CollectionsClass;
}

export type SupportOverviewActivePlayerSupportsTownTemplates = {
    readonly main:               string;
    readonly list_support:       string;
    readonly list_total_units:   string;
    readonly list_units_in_town: string;
    readonly list_no_results:    string;
}

export type SupportOverviewActivePlayerSupportsTowns = {
    readonly templates:   SupportOverviewActivePlayerSupportsTownTemplates;
    readonly models:      SupportOverviewActivePlayerSupportsTownModels;
    readonly collections: SupportOverviewActivePlayerSupportsTownsCollections;
}

export type SupportOverviewActivePlayerSupportsTownsCollections = {
    readonly ActivePlayerSupportsTowns: CollectionsClass;
}

export type SupportOverviewActiveTownSupportsTowns = {
    readonly templates:   SupportOverviewActivePlayerSupportsTownTemplates;
    readonly models:      SupportOverviewActivePlayerSupportsTownModels;
    readonly collections: SupportOverviewActiveTownSupportsTownsCollections;
}

export type SupportOverviewActiveTownSupportsTownsCollections = {
    readonly ActiveTownSupportsTowns: CollectionsClass;
}

export type SupportOverviewSupportForActiveTown = {
    readonly templates:   SupportOverviewActivePlayerSupportsTownTemplates;
    readonly models:      SupportOverviewActivePlayerSupportsTownModels;
    readonly collections: SupportOverviewSupportForActiveTownCollections;
}

export type SupportOverviewSupportForActiveTownCollections = {
    readonly SupportForActiveTown: CollectionsClass;
}

export type Quest = {
    readonly info: QuestInfo;
}

export type QuestInfo = {
    readonly templates:   CollectionsClass;
    readonly models:      ProgressModels;
    readonly collections: CollectionsClass;
}

export type ProgressModels = {
    readonly Progressable: BuildingOrders;
}

export type QuestProgress = {
    readonly progress: Progress;
}

export type Progress = {
    readonly templates:   CollectionsClass;
    readonly models:      ProgressModels;
    readonly collections: ProgressCollections;
}

export type ProgressCollections = {
    readonly PlayerHeroes: BuildingOrders;
}

export type QuestWelcome = {
    readonly welcome: QuestWelcomeWelcome;
}

export type QuestWelcomeWelcome = {
    readonly templates:   CollectionsClass;
    readonly models:      WelcomeModels;
    readonly collections: CollectionsClass;
}

export type WelcomeModels = {
    readonly Progressable:   BuildingOrders;
    readonly Player:         BuildingOrders;
    readonly PlayerSettings: BuildingOrders;
}

export type Questlog = {
    readonly index: QuestlogIndex;
}

export type QuestlogIndex = {
    readonly templates:   Templates24;
    readonly models:      Models12;
    readonly collections: Collections8;
}

export type Collections8 = {
    readonly IslandQuestPlayerRelations: BuildingOrders;
    readonly IslandQuests:               BuildingOrders;
    readonly Units:                      BuildingOrders;
    readonly Towns:                      BuildingOrders;
    readonly PlayerHeroes:               BuildingOrders;
}

export type Models12 = {
    readonly PlayerSettings: BuildingOrders;
    readonly PlayerLedger:   BuildingOrders;
}

export type Templates24 = {
    readonly index:               string;
    readonly quest_index:         string;
    readonly quest_detail:        string;
    readonly category:            string;
    readonly quest:               string;
    readonly iq_quest:            string;
    readonly iq_empty_quest:      string;
    readonly iq_empty_detail:     string;
    readonly iq_quest_detail:     string;
    readonly iq_quest_decision:   string;
    readonly iq_quest_challenge:  string;
    readonly iq_tooltips:         string;
    readonly wnd_attack_npc:      string;
    readonly wnd_collect_units:   string;
    readonly wnd_spend_resources: string;
    readonly wnd_provoke_attack:  string;
    readonly wnd_bear_effect:     string;
    readonly wnd_wait_time:       string;
    readonly town_groups_list:    string;
}

export type Quizevent = {
    readonly index: QuizeventIndex;
}

export type QuizeventIndex = {
    readonly templates:   Templates25;
    readonly models:      Models13;
    readonly collections: Collections9;
}

export type Collections9 = {
    readonly Benefits: BuildingOrders;
}

export type Models13 = {
    readonly PlayerQuizEvent:                   CollectionsClass;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
}

export type Templates25 = {
    readonly main:                string;
    readonly info_overlay:        string;
    readonly rewards_list:        string;
    readonly rewards_list_reward: string;
}

export type RecruitingList = {
    readonly index: RecruitingListIndex;
}

export type RecruitingListIndex = {
    readonly templates:   Templates26;
    readonly models:      CollectionsClass;
    readonly collections: Collections10;
}

export type Collections10 = {
    readonly RemainingUnitOrders: BuildingOrders;
    readonly FeatureBlocks:       BuildingOrders;
}

export type Templates26 = {
    readonly recruiting_list:  string;
    readonly unit_order_entry: string;
}

export type Rota = {
    readonly index:      RotaIndex;
    readonly event_pass: RotaEventPass;
}

export type RotaEventPass = {
    readonly templates:   EventPassTemplates;
    readonly models:      Models14;
    readonly collections: EventPassCollections;
}

export type Models14 = {
    readonly RotaEventData:                     CollectionsClass;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
    readonly PlayerEventPass:                   CollectionsClass;
}

export type RotaIndex = {
    readonly templates:   Templates27;
    readonly models:      Models15;
    readonly collections: Collections11;
}

export type Collections11 = {
    readonly RotaEventInventoryItems:        CollectionsClass;
    readonly RotaEventShopItems:             CollectionsClass;
    readonly RotaUnfinishedPaintingElements: CollectionsClass;
    readonly PlayerEventPassRewards:         CollectionsClass;
}

export type Models15 = {
    readonly PlayerRota:                        CollectionsClass;
    readonly RotaEventData:                     CollectionsClass;
    readonly RotaEventCollectedItemCount:       CollectionsClass;
    readonly PlayerLedger:                      BuildingOrders;
    readonly PlayerHappeningMainRewardProgress: CollectionsClass;
    readonly PlayerEventPass:                   CollectionsClass;
}

export type Templates27 = {
    readonly index:               string;
    readonly rewards_list:        string;
    readonly rewards_list_reward: string;
    readonly indicator_tooltip:   string;
    readonly tutorial:            string;
    readonly shop:                string;
    readonly shop_item:           string;
}

export type RuntimeInfo = {
    readonly index: RuntimeInfoIndex;
}

export type RuntimeInfoIndex = {
    readonly templates:   StickyTemplates;
    readonly models:      Models16;
    readonly collections: Collections12;
}

export type Collections12 = {
    readonly Units: BuildingOrders;
    readonly Towns: BuildingOrders;
}

export type Models16 = {
    readonly RuntimeSimulator: CollectionsClass;
}

export type Senate = {
    readonly index: SenateIndex;
}

export type SenateIndex = {
    readonly templates:   Templates28;
    readonly models:      CollectionsClass;
    readonly collections: CollectionsClass;
}

export type Templates28 = {
    readonly index:    string;
    readonly building: string;
}

export type Spawn = {
    readonly index: SpawnIndex;
}

export type SpawnIndex = {
    readonly templates:   Templates29;
    readonly models:      Models17;
    readonly collections: Collections13;
}

export type Collections13 = {
    readonly SpawnMissions: CollectionsClass;
    readonly Units:         BuildingOrders;
    readonly PlayerHints:   BuildingOrders;
}

export type Models17 = {
    readonly Spawn: BuildingOrders;
}

export type Templates29 = {
    readonly spawn_window:      string;
    readonly sub_window_reward: string;
    readonly tutorial:          string;
    readonly _missions:         string;
}

export type FrontendBridgeStorage = {
    readonly index: StorageIndex;
}

export type StorageIndex = {
    readonly templates:   Templates30;
    readonly models:      IndecentModels;
    readonly collections: AllOffersCollections;
}

export type Templates30 = {
    readonly index:      string;
    readonly gameborder: string;
}

export type StrategicMapFilter = {
    readonly index: StrategicMapFilterIndex;
}

export type StrategicMapFilterIndex = {
    readonly templates:   Templates31;
    readonly models:      Models18;
    readonly collections: Collections14;
}

export type Collections14 = {
    readonly CustomColors:  BuildingOrders;
    readonly AlliancePacts: BuildingOrders;
    readonly PlayerHints:   PlayerHints;
}

export type Models18 = {
    readonly PremiumFeatures: BuildingOrders;
    readonly Player:          BuildingOrders;
}

export type Templates31 = {
    readonly index:     string;
    readonly highlight: string;
}

export type Tasksevent = {
    readonly index: TaskseventIndex;
}

export type TaskseventIndex = {
    readonly templates:   Templates32;
    readonly models:      Models19;
    readonly collections: Collections15;
}

export type Collections15 = {
    readonly PlayerTasks: CollectionsClass;
}

export type Models19 = {
    readonly PlayerTasksEvent:     CollectionsClass;
    readonly TasksEventGrandPrize: CollectionsClass;
}

export type Templates32 = {
    readonly grand_prize_slot: string;
    readonly index:            string;
    readonly task:             string;
    readonly tooltip:          string;
    readonly tutorial:         string;
}

export type TownOverlay = {
    readonly index: TownOverlayIndex;
}

export type TownOverlayIndex = {
    readonly templates:   StickyTemplates;
    readonly collections: Collections9;
}

export type Turnovertokens = {
    readonly index:     TurnovertokensIndex;
    readonly shop:      TurnovertokensShop;
    readonly sanctuary: Sanctuary;
}

export type TurnovertokensIndex = {
    readonly templates:   Templates33;
    readonly models:      Models20;
    readonly collections: Collections16;
}

export type Collections16 = {
    readonly Benefits:             BuildingOrders;
    readonly AssassinsPlayerSpots: CollectionsClass;
    readonly PlayerHints:          BuildingOrders;
}

export type Models20 = {
    readonly AssassinsPlayerMetaData:    CollectionsClass;
    readonly PlayerLedger:               BuildingOrders;
    readonly AssassinsCommunityGoals:    CollectionsClass;
    readonly AssassinsRanking:           CollectionsClass;
    readonly TurnOverTokenPlayerRanking: CollectionsClass;
}

export type Templates33 = {
    readonly fight:                                string;
    readonly fight_spots:                          string;
    readonly arrow:                                string;
    readonly sub_window_quiver_empty:              string;
    readonly sub_window_tutorial:                  string;
    readonly sub_window_reward_presentation:       string;
    readonly sub_window_assassin_animation:        string;
    readonly sub_window_assassin_animation_arrow:  string;
    readonly sub_window_assassin_animation_points: string;
    readonly sub_window_all_units_dead_animation:  string;
    readonly sub_window_daily_ranking:             string;
    readonly goals:                                string;
    readonly ranking:                              string;
    readonly collection_complete:                  string;
}

export type Sanctuary = {
    readonly templates:   SanctuaryTemplates;
    readonly models:      SanctuaryModels;
    readonly collections: SanctuaryCollections;
}

export type SanctuaryCollections = {
    readonly PlayerHints: BuildingOrders;
}

export type SanctuaryModels = {
    readonly AssassinsPlayerMetaData: CollectionsClass;
}

export type SanctuaryTemplates = {
    readonly sanctuary:           string;
    readonly sub_window_tutorial: string;
}

export type TurnovertokensShop = {
    readonly templates:   ShopTemplates;
    readonly models:      Models21;
    readonly collections: Collections17;
}

export type Collections17 = {
    readonly AssassinsShopItems: CollectionsClass;
}

export type Models21 = {
    readonly PlayerLedger: BuildingOrders;
}

export type UpdateNotification = {
    readonly index: InfoClass;
}

export type InfoClass = {
    readonly templates:   CollectionsClass;
    readonly models:      CollectionsClass;
    readonly collections: CollectionsClass;
}

export type ValentinesdayCollect = {
    readonly index: ValentinesdayCollectIndex;
}

export type ValentinesdayCollectIndex = {
    readonly templates:   Templates34;
    readonly models:      CollectionsClass;
    readonly collections: CollectionsClass;
}

export type Templates34 = {
    readonly welcome_screen: string;
}

export type WorldEndWelcome = {
    readonly index: WorldEndWelcomeIndex;
}

export type WorldEndWelcomeIndex = {
    readonly templates:   Templates5;
    readonly models:      CollectionsClass;
    readonly collections: SanctuaryCollections;
}

export type WorldWonderDonations = {
    readonly index: WorldWonderDonationsIndex;
}

export type WorldWonderDonationsIndex = {
    readonly templates:   Templates35;
    readonly models:      CollectionsClass;
    readonly collections: Collections18;
}

export type Collections18 = {
    readonly WonderParticipations: CollectionsClass;
}

export type Templates35 = {
    readonly resources: string;
    readonly favor:     string;
}

export type WorldWondersInfo = {
    readonly ranking: WorldWondersInfoRanking;
    readonly info:    InfoClass;
}

export type WorldWondersInfoRanking = {
    readonly templates:   Templates36;
    readonly models:      Models22;
    readonly collections: IndecentCollections;
}

export type Models22 = {
    readonly WondersRanking: CollectionsClass;
    readonly Player:         BuildingOrders;
}

export type Templates36 = {
    readonly ranking:                 string;
    readonly flags_in_background:     string;
    readonly main_ranking_header_row: string;
    readonly main_ranking_column:     string;
    readonly wonder_tooltip:          string;
}

export type GodPowersCommand = {
    readonly ares:     { [key: string]: string };
    readonly zeus:     { [key: string]: string };
    readonly hera:     Hera;
    readonly poseidon: Hera;
    readonly athena:   { [key: string]: string };
    readonly hades:    { [key: string]: string };
    readonly artemis:  { [key: string]: string };
}

export type Hera = {
    readonly "0": string;
}

export type GodPowersForOtherTowns = {
    readonly aphrodite: string[];
    readonly ares:      GodPowersForOtherTownsAres;
    readonly zeus:      string[];
    readonly hera:      string[];
    readonly poseidon:  string[];
    readonly athena:    string[];
    readonly hades:     string[];
    readonly artemis:   string[];
}

export type GodPowersForOtherTownsAres = {
    readonly "1": string;
}

export type GodPowersTown = {
    readonly aphrodite: { [key: string]: string };
    readonly ares:      { [key: string]: string };
    readonly zeus:      { [key: string]: string };
    readonly hera:      { [key: string]: string };
    readonly poseidon:  { [key: string]: string };
    readonly athena:    { [key: string]: string };
    readonly hades:     { [key: string]: string };
    readonly artemis:   { [key: string]: string };
}

export type Gods = {
    readonly zeus:      Artemis;
    readonly poseidon:  Artemis;
    readonly hera:      Artemis;
    readonly athena:    Artemis;
    readonly hades:     Artemis;
    readonly artemis:   Artemis;
    readonly aphrodite: Aphrodite;
    readonly ares:      GodsAres;
}

export type Aphrodite = {
    readonly name:        string;
    readonly id:          string;
    readonly units:       UnitValue[];
    readonly powers:      string[];
    readonly topic:       string;
    readonly description: string;
}

export type UnitValue = {
    readonly id:                    string;
    readonly name:                  string;
    readonly name_plural:           string;
    readonly speed:                 number;
    readonly attack:                number;
    readonly description:           string;
    readonly resources:             Resources;
    readonly favor:                 number;
    readonly population:            number;
    readonly build_time:            number;
    readonly god_id:                null | string;
    readonly research_dependencies: string[] | null;
    readonly building_dependencies: PurpleBuildingDependencies | null;
    readonly is_naval:              boolean;
    readonly max_per_attack:        number | null;
    readonly max_per_support:       null;
    readonly unit_function:         UnitFunction;
    readonly category:              UnitCategory;
    readonly special_abilities:     string[];
    readonly passive:               string;
    readonly is_npc_unit_only:      boolean;
    readonly def_hack?:             number;
    readonly def_pierce?:           number;
    readonly def_distance?:         number;
    readonly booty?:                number;
    readonly infantry?:             boolean | null;
    readonly flying?:               boolean | null;
    readonly attack_type?:          AttackType;
    readonly defense?:              number;
    readonly transport?:            null;
    readonly capacity?:             number;
}

export enum AttackType {
    Distance = "distance",
    Hack = "hack",
    Pierce = "pierce",
}

export type PurpleBuildingDependencies = {
    readonly temple?:   number;
    readonly docks?:    number;
    readonly barracks?: number;
    readonly academy?:  number;
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

export type GodsAres = {
    readonly name:        string;
    readonly id:          string;
    readonly units:       AresUnit[];
    readonly powers:      string[];
    readonly topic:       string;
    readonly description: string;
}

export type AresUnit = {
    readonly id:                    string;
    readonly name:                  string;
    readonly name_plural:           string;
    readonly speed:                 number;
    readonly attack:                number;
    readonly description:           string;
    readonly resources:             Resources;
    readonly favor:                 number;
    readonly population:            number;
    readonly build_time:            number;
    readonly god_id:                string;
    readonly research_dependencies: any[];
    readonly building_dependencies: FluffyBuildingDependencies;
    readonly is_naval:              boolean;
    readonly max_per_attack:        null;
    readonly max_per_support:       null;
    readonly unit_function:         UnitFunction;
    readonly category:              UnitCategory;
    readonly special_abilities:     string[];
    readonly passive:               string;
    readonly is_npc_unit_only:      boolean;
    readonly def_hack:              number;
    readonly def_pierce:            number;
    readonly def_distance:          number;
    readonly booty:                 number;
    readonly infantry:              null;
    readonly flying:                boolean | null;
    readonly attack_type:           AttackType;
}

export type FluffyBuildingDependencies = {
    readonly temple:    number;
    readonly barracks?: number;
}

export type Artemis = {
    readonly name:        string;
    readonly id:          string;
    readonly units:       ArtemisUnit[];
    readonly powers:      string[];
    readonly topic:       string;
    readonly description: string;
}

export type ArtemisUnit = {
    readonly id:                    string;
    readonly name:                  string;
    readonly name_plural:           string;
    readonly speed:                 number;
    readonly attack:                number;
    readonly description:           string;
    readonly resources:             Resources;
    readonly favor:                 number;
    readonly population:            number;
    readonly build_time:            number;
    readonly god_id:                string;
    readonly research_dependencies: any[];
    readonly building_dependencies: TentacledBuildingDependencies;
    readonly is_naval:              boolean;
    readonly max_per_attack:        null;
    readonly max_per_support:       null;
    readonly unit_function:         UnitFunction;
    readonly category:              UnitCategory;
    readonly special_abilities:     string[];
    readonly passive:               string;
    readonly is_npc_unit_only:      boolean;
    readonly def_hack?:             number;
    readonly def_pierce?:           number;
    readonly def_distance?:         number;
    readonly booty?:                number;
    readonly infantry?:             null;
    readonly flying?:               boolean | null;
    readonly attack_type?:          AttackType;
    readonly defense?:              number;
    readonly transport?:            null;
    readonly capacity?:             number;
}

export type TentacledBuildingDependencies = {
    readonly temple: number;
}

export type Hero = {
    readonly id:                 string;
    readonly category:           HeroCategory;
    readonly name:               string;
    readonly description:        string;
    readonly description_args:   DescriptionArgs;
    readonly short_description:  string;
    readonly default_level:      number;
    readonly cost:               number;
    readonly award_requirements: any[];
    readonly is_naval:           boolean;
    readonly exclusive:          boolean;
    readonly hidden:             boolean;
    readonly attack_type:        AttackType;
    readonly attack:             number;
    readonly def_hack:           number;
    readonly def_pierce:         number;
    readonly def_distance:       number;
    readonly speed:              number;
    readonly booty:              number;
    readonly preconditions:      any[];
    readonly max_per_attack:     number;
    readonly max_per_support:    number;
}

export enum HeroCategory {
    War = "war",
    Wisdom = "wisdom",
}

export type DescriptionArgs = {
    readonly "1": The1;
}

export type The1 = {
    readonly value:     number;
    readonly level_mod: number;
    readonly unit:      UnitEnum;
}

export enum UnitEnum {
    Empty = "%",
    Unit = "",
}

export type GameDataTypeInventory = {
    readonly cost_of_extension:     { [key: string]: number };
    readonly start_amount_of_slots: number;
    readonly total_amount_of_slots: number;
}

export type InventoryItems = {
    readonly power_reward_effect_inventory_item: PowerRewardEffectInventoryItem;
}

export type PowerRewardEffectInventoryItem = {
    readonly type:        MysticRewardTypeEnum;
    readonly name:        string;
    readonly description: string;
    readonly properties:  any[];
}

export type IslandQuests = {
    readonly exchange_quest_cost: number;
    readonly skip_cooldown_cost:  number;
}

export type Powers = {
    readonly narcissism:                              AresArmy;
    readonly enlist_militia_penalty:                  AttackTypeBoostAlliance;
    readonly charitable_festival:                     AresSacrificeBoostAlliance;
    readonly hymn_to_aphrodite:                       AresSacrifice;
    readonly pygmalion:                               AresRage;
    readonly ares_sacrifice:                          AresSacrifice;
    readonly ares_army:                               AresArmy;
    readonly bloodlust:                               Acumen;
    readonly spartan_training:                        AttackTypeBoostAlliance;
    readonly divine_sign:                             AresArmy;
    readonly bolt:                                    Acumen;
    readonly fair_wind:                               AresSacrificeBoostAlliance;
    readonly transformation:                          AresSacrifice;
    readonly wedding:                                 AresArmy;
    readonly happiness:                               ANewHope;
    readonly fertility_improvement:                   Acumen;
    readonly desire:                                  ANewHope;
    readonly kingly_gift:                             Acumen;
    readonly call_of_the_ocean:                       AresArmy;
    readonly earthquake:                              AresSacrificeBoostAlliance;
    readonly sea_storm:                               AttackTypeBoostAlliance;
    readonly patroness:                               AresSacrificeBoostAlliance;
    readonly wisdom:                                  AresArmy;
    readonly town_protection:                         AresSacrifice;
    readonly strength_of_heroes:                      Acumen;
    readonly pest:                                    AresSacrificeBoostAlliance;
    readonly resurrection:                            AttackTypeBoostAlliance;
    readonly underworld_treasures:                    ANewHope;
    readonly cap_of_invisibility:                     AresSacrifice;
    readonly natures_gift:                            AresArmy;
    readonly effort_of_the_huntress:                  AttackTypeBoostAlliance;
    readonly illusion:                                AresSacrifice;
    readonly cleanse:                                 AttackBoost;
    readonly acumen:                                  Acumen;
    readonly divine_senses:                           AresArmy;
    readonly myrmidion_attack:                        AttackBoost;
    readonly trojan_defense:                          AresSacrifice;
    readonly resource_boost:                          ResourceBoost;
    readonly favor_boost:                             AresSacrificeBoostAlliance;
    readonly unit_training_boost:                     AttackBoost;
    readonly unit_training_boost_non_scaling:         AresArmy;
    readonly instant_favor:                           AttackBoost;
    readonly favor_of_the_gods:                       AresSacrificeBoostAlliance;
    readonly instant_resources:                       InstantResources;
    readonly instant_resources_rare:                  InstantResources;
    readonly instant_resources_epic:                  InstantResources;
    readonly instant_currency:                        InstantCurrency;
    readonly instant_currency_crm:                    InstantCurrencyCRM;
    readonly instant_gold:                            AttackTypeBoostAlliance;
    readonly hermes_boost:                            AresSacrifice;
    readonly happy_folks:                             AresSacrifice;
    readonly attack_boost:                            AttackBoost;
    readonly defense_boost:                           AresSacrifice;
    readonly building_order_boost:                    Acumen;
    readonly unit_order_boost:                        AttackBoost;
    readonly unit_movement_boost:                     AttackBoost;
    readonly forced_loyalty:                          Acumen;
    readonly loyalty_loss:                            Acumen;
    readonly attack_penalty:                          ANewHope;
    readonly defense_penalty:                         ANewHope;
    readonly illusion_defense_penalty:                AttackBoost;
    readonly favor_penalty:                           AresArmy;
    readonly wood_production_penalty:                 AresSacrificeBoostAlliance;
    readonly stone_production_penalty:                Acumen;
    readonly iron_production_penalty:                 AresArmy;
    readonly longterm_festival_resource_boost:        Acumen;
    readonly longterm_attack_boost:                   Acumen;
    readonly longterm_defense_boost:                  Acumen;
    readonly longterm_resource_boost:                 LongtermResourceBoost;
    readonly longterm_unit_order_boost:               Acumen;
    readonly longterm_unit_order_penalty:             LongtermUnitOrderPenalty;
    readonly luxurious_residence:                     ANewHope;
    readonly travelling_mentor:                       AresSacrifice;
    readonly population_boost:                        PopulationBoost;
    readonly starter_protection:                      AttackTypeBoostAlliance;
    readonly a_new_hope:                              ANewHope;
    readonly great_arming:                            Acumen;
    readonly demoralizing_plague:                     AresSacrifice;
    readonly demoralized_army:                        ANewHope;
    readonly sudden_aid:                              Acumen;
    readonly wedding_of_the_aristocrats:              AresArmy;
    readonly chain_lightning:                         AttackBoost;
    readonly summoning_of_the_nereids:                Acumen;
    readonly help_of_the_nereids:                     AresSacrifice;
    readonly passionate_population:                   AresArmy;
    readonly passionate_training:                     AresArmy;
    readonly suffering_and_mourning:                  Acumen;
    readonly suffering:                               Acumen;
    readonly mourning:                                AresSacrifice;
    readonly divine_intervention:                     AttackBoost;
    readonly divine_aura:                             AresSacrifice;
    readonly aura_of_healing:                         ANewHope;
    readonly hero:                                    AresSacrifice;
    readonly city_skin:                               CitySkin;
    readonly culture_level:                           AresArmy;
    readonly culture_points:                          Acumen;
    readonly instant_resources_mermaid:               AttackTypeBoostAlliance;
    readonly attack_ship_attack_boost_small:          AttackBoost;
    readonly attack_ship_attack_boost_medium:         AttackBoost;
    readonly attack_ship_attack_boost_large:          AttackBoost;
    readonly longterm_trade_speed_boost:              Acumen;
    readonly assassins_resource_boost:                ANewHope;
    readonly assassins_building_order_boost:          ANewHope;
    readonly assassins_unit_order_boost:              ANewHope;
    readonly assassins_favor_boost:                   ANewHope;
    readonly assassins_acumen:                        ANewHope;
    readonly rare_resource_boost:                     AttackTypeBoostAlliance;
    readonly epic_resource_boost:                     AresSacrificeBoostAlliance;
    readonly rare_favor_boost:                        AttackTypeBoostAlliance;
    readonly epic_favor_boost:                        AresSacrificeBoostAlliance;
    readonly rare_building_order_boost:               AttackTypeBoostAlliance;
    readonly epic_building_order_boost:               AresArmy;
    readonly rare_unit_order_boost:                   AttackTypeBoostAlliance;
    readonly epic_unit_order_boost:                   AresSacrificeBoostAlliance;
    readonly rare_defense_boost:                      AttackTypeBoostAlliance;
    readonly epic_defense_boost:                      AresArmy;
    readonly rare_attack_boost:                       AttackTypeBoostAlliance;
    readonly epic_attack_boost:                       AttackTypeBoostAlliance;
    readonly instant_resources_package:               AresSacrificeBoostAlliance;
    readonly instant_favor_package:                   AttackBoost;
    readonly instant_unit_package:                    AresArmy;
    readonly loyalty_resource_boost:                  ANewHope;
    readonly crafting_ingredients:                    AresArmy;
    readonly crafting_ingredients_boost:              Crafting;
    readonly campaign_units:                          AresArmy;
    readonly mission_units:                           ANewHope;
    readonly olympic_torch:                           GrepolympiaChampionship1;
    readonly olympic_merchant:                        GrepolympiaChampionship1;
    readonly olympic_sword:                           GrepolympiaChampionship1;
    readonly olympic_senses:                          GrepolympiaChampionship1;
    readonly grepolympia_athlete_boost:               GrepolympiaAthleteBoost;
    readonly grepolympia_championship_1:              GrepolympiaChampionship1;
    readonly grepolympia_championship_2:              GrepolympiaChampionship1;
    readonly grepolympia_championship_3:              GrepolympiaChampionship1;
    readonly grepolympia_championship_4:              GrepolympiaChampionship1;
    readonly missions_power_1:                        MissionsPower1_Class;
    readonly missions_power_2:                        MissionsPower1_Class;
    readonly missions_power_3:                        MissionsPower1_Class;
    readonly missions_power_4:                        MissionsPower1_Class;
    readonly missions_reduce_ritual_cooldown:         MissionsPower1_Class;
    readonly crafting_recipes_power:                  Crafting;
    readonly wheel_free_refill:                       WheelFreeRefill;
    readonly grid_event_advanced_scouts:              GridEventAdvancedScouts;
    readonly rota_event_tyches_wreath:                RotaEventTychesWreath;
    readonly event_pass_divine_prizes:                AresSacrificeBoostAlliance;
    readonly divine_battle_strategy_rare:             AresSacrifice;
    readonly divine_battle_strategy_epic:             AresSacrifice;
    readonly naval_battle_strategy_rare:              AresArmy;
    readonly naval_battle_strategy_epic:              AresArmy;
    readonly land_battle_strategy_rare:               Acumen;
    readonly land_battle_strategy_epic:               Acumen;
    readonly olympus_mortal_curse:                    AresArmy;
    readonly blessing_of_olympus:                     ANewHope;
    readonly ares_rage:                               AresRage;
    readonly soterias_shrine:                         AresRage;
    readonly unit_attack_boost_alliance:              AresArmy;
    readonly attack_type_boost_alliance:              AttackTypeBoostAlliance;
    readonly resource_boost_alliance:                 ResourceBoostAlliance;
    readonly mythical_type_attack_boost_alliance:     AttackBoost;
    readonly unit_order_boost_alliance:               UnitOrderOstAlliance;
    readonly unit_order_boost_alliance_hera:          UnitOrderBoostAllianceHera;
    readonly attack_boost_alliance:                   AttackBoostAlliance;
    readonly defense_boost_alliance:                  DefenseBoostAlliance;
    readonly unit_movement_boost_alliance:            UnitMovementBoostAlliance;
    readonly unit_defense_boost_alliance:             AttackBoost;
    readonly bolt_lightning_boost_alliance:           Acumen;
    readonly unit_order_penalty_effect_alliance:      LongtermUnitOrderPenalty;
    readonly attack_defense_boost_alliance:           AttackDefenseBoostAlliance;
    readonly favor_boost_alliance:                    FavorBoostAlliance;
    readonly population_boost_alliance:               PopulationBoostAlliance;
    readonly happiness_power_boost_alliance:          AresSacrifice;
    readonly illusion_defense_penalty_alliance:       AttackBoost;
    readonly heroic_power_boost_alliance:             HeroicPowerBoostAlliance;
    readonly favorable_wind_boost_alliance:           Acumen;
    readonly wedding_resource_boost_alliance:         AresArmy;
    readonly unit_order_cost_alliance:                UnitOrderOstAlliance;
    readonly unit_attack_defense_boost_alliance:      AttackBoost;
    readonly call_ocean_boost_alliance:               AttackTypeBoostAlliance;
    readonly huntress_aim_boost_alliance:             AresSacrifice;
    readonly return_underworld_boost_alliance:        AttackTypeBoostAlliance;
    readonly ares_sacrifice_boost_alliance:           AresSacrificeBoostAlliance;
    readonly charitable_festival_boost_alliance:      AresSacrificeBoostAlliance;
    readonly mythical_unit_favor_cost_boost_alliance: AresArmy;
    readonly portal_to_olympus_alliance:              AresSacrificeBoostAlliance;
}

export type ANewHope = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 string;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     EffectElement[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               ANewHopeMetaDefaults | null;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
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

export type Images = {
    readonly mini:   string;
    readonly small:  string;
    readonly medium: string;
    readonly large:  string;
}

export type ANewHopeMetaDefaults = {
    readonly percent?:          number;
    readonly lifetime?:         number;
    readonly attack_modifier?:  number;
    readonly defense_modifier?: number;
    readonly amount?:           number;
    readonly cf_on?:            MetaField;
    readonly mission_units?:    MissionUnits;
    readonly type?:             MetaDefaultsTypeEnum;
}

export enum MetaField {
    Amount = "amount",
    Category = "category",
    Lifetime = "lifetime",
    Percent = "percent",
    Type = "type",
}

export type MissionUnits = {
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

export type Acumen = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 string;
    readonly short_effect:                null | string;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 AcumenPowerGroup;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     EffectElement[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 string[];
    readonly meta_defaults:               AcumenMetaDefaults | null;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           string[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type AcumenMetaDefaults = {
    readonly lifetime?:             number;
    readonly factor?:               number;
    readonly min_percent?:          number;
    readonly max_percent?:          number;
    readonly percent?:              number;
    readonly cf_on?:                CFOn;
    readonly amount?:               number;
    readonly type?:                 string;
    readonly limit?:                Limit;
    readonly progress?:             Limit;
    readonly percent_production?:   number;
    readonly percent_recruitment?:  number;
    readonly effect_runtime_hours?: number;
}

export enum CFOn {
    Lifetime = "lifetime",
    Limit = "limit",
}

export type Limit = {
    readonly battlepoints: number;
}

export enum AcumenPowerGroup {
    AttackBoostGroup = "attack_boost_group",
    BattlePointBoostGroup = "battle_point_boost_group",
    BuildingBoostGroup = "building_boost_group",
    DefenseBoostGroup = "defense_boost_group",
    Empty = "",
}

export type AresArmy = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 string;
    readonly short_effect:                null | string;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     EffectElement[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 string[];
    readonly meta_defaults:               AresArmyMetaDefaults | null;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           string[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type AresArmyMetaDefaults = {
    readonly type?:           string;
    readonly amount?:         number;
    readonly campaign_units?: MetaDefaultsElement[];
    readonly ingredients?:    MetaDefaultsElement[];
    readonly level_up?:       number;
    readonly exact?:          boolean;
    readonly lifetime?:       number;
    readonly factor?:         number;
    readonly percent?:        number;
    readonly cf_on?:          CFOn;
    readonly limit?:          Limit;
    readonly progress?:       Limit;
}

export type MetaDefaultsElement = {
    readonly type:   string;
    readonly amount: number;
}

export type AresRage = {
    readonly effect:                      AresRageEffectClass;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 string;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     EffectElement[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 string[];
    readonly meta_defaults:               AresRageMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type AresRageEffectClass = {
    readonly type: PurpleType;
}

export type PurpleType = {
    readonly not_cast: string;
    readonly cast:     string;
}

export type AresRageMetaDefaults = {
    readonly percent?:                 number;
    readonly level_increases:          MetaField;
    readonly level_increases_decimals: number;
    readonly level:                    number;
    readonly type:                     string;
    readonly amount?:                  number;
}

export type AresSacrifice = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 string;
    readonly short_effect:                null | string;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              string[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 AcumenPowerGroup;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     string[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 string[];
    readonly meta_defaults:               AresSacrificeMetaDefaults | null;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type AresSacrificeMetaDefaults = {
    readonly amount?:         number;
    readonly percent?:        number;
    readonly lifetime?:       number;
    readonly cf_on?:          CFOn;
    readonly type?:           string;
    readonly limit?:          Limit;
    readonly progress?:       Limit;
    readonly claim_percent?:  number;
    readonly trade_percent?:  number;
    readonly wall_bonus?:     number;
    readonly militia_bonus?:  number;
    readonly farm_level_cap?: number;
}

export type AresSacrificeBoostAlliance = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 string;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               AresSacrificeBoostAllianceMetaDefaults | null;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type AresSacrificeBoostAllianceMetaDefaults = {
    readonly percent?:  number;
    readonly lifetime?: number;
    readonly cf_on?:    MetaField;
    readonly type?:     number | string;
    readonly amount?:   number;
}

export type AttackBoost = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 string;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 AttackBoostPowerGroup;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     EffectElement[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 string[];
    readonly meta_defaults:               AttackBoostMetaDefaults | null;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type AttackBoostMetaDefaults = {
    readonly percent?:         number;
    readonly lifetime?:        number;
    readonly cf_on?:           MetaField;
    readonly amount?:          number;
    readonly type?:            string;
    readonly attack_percent?:  number;
    readonly defense_percent?: number;
}

export enum AttackBoostPowerGroup {
    AttackBoostGroup = "attack_boost_group",
    AttackShipAttackBoostGroup = "attack_ship_attack_boost_group",
    Empty = "",
    UnitBoostGroup = "unit_boost_group",
}

export type AttackBoostAlliance = {
    readonly effect:                      AttackBoostAllianceDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        AttackBoostAllianceDescription;
    readonly description:                 AttackBoostAllianceDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 AcumenPowerGroup;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type AttackBoostAllianceDescription = {
    readonly type: FluffyType;
}

export type FluffyType = {
    readonly all:            string;
    readonly naval:          string;
    readonly ground:         string;
    readonly regular_ground: string;
    readonly "all|flying":   string;
}

export type AttackBoostAllianceMetaDefaults = {
    readonly type:    string;
    readonly percent: number;
}

export type AttackDefenseBoostAlliance = {
    readonly effect:                      AttackDefenseBoostAllianceDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        AttackDefenseBoostAllianceDescription;
    readonly description:                 AttackDefenseBoostAllianceDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 AcumenPowerGroup;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 string[];
    readonly meta_defaults:               AttackDefenseBoostAllianceMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type AttackDefenseBoostAllianceDescription = {
    readonly type: TentacledType;
}

export type TentacledType = {
    readonly naval:   string;
    readonly regular: string;
}

export type AttackDefenseBoostAllianceMetaDefaults = {
    readonly type:    string;
    readonly percent: number;
    readonly god:     string;
}

export type AttackTypeBoostAlliance = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 string;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     EffectElement[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 string[];
    readonly meta_defaults:               AttackTypeBoostAllianceMetaDefaults | null;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type AttackTypeBoostAllianceMetaDefaults = {
    readonly type?:            string;
    readonly percent?:         number;
    readonly lifetime?:        number;
    readonly level?:           number;
    readonly amount?:          number;
    readonly cf_on?:           MetaField;
    readonly recruit_percent?: number;
}

export type CitySkin = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        CitySkinDescription;
    readonly description:                 CitySkinDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               CitySkinMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type CitySkinDescription = {
    readonly type: StickyType;
}

export type StickyType = {
    readonly fleet_port:  string;
    readonly hades:       string;
    readonly high_temple: string;
    readonly protectress: string;
}

export type CitySkinMetaDefaults = {
    readonly type: string;
}

export type Crafting = {
    readonly effect:                      CraftingIngredientsBoostDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        CraftingIngredientsBoostDescription;
    readonly description:                 CraftingIngredientsBoostDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               CraftingIngredientsBoostMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type CraftingIngredientsBoostDescription = {
    readonly type: IndigoType;
}

export type IndigoType = {
    readonly easter_skin_demeter:     string;
    readonly easter_skin_incantation: string;
    readonly easter_skin_easter_hen:  string;
}

export type CraftingIngredientsBoostMetaDefaults = {
    readonly lifetime: number;
    readonly type:     string;
}

export type DefenseBoostAlliance = {
    readonly effect:                      DefenseBoostAllianceDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        DefenseBoostAllianceDescription;
    readonly description:                 DefenseBoostAllianceDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 AcumenPowerGroup;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type DefenseBoostAllianceDescription = {
    readonly type: IndecentType;
}

export type IndecentType = {
    readonly all:   string;
    readonly naval: string;
}

export type FavorBoostAlliance = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        FavorBoostAllianceName;
    readonly description:                 string;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 string[];
    readonly meta_defaults:               FavorBoostAllianceMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type FavorBoostAllianceMetaDefaults = {
    readonly percent: number;
    readonly god:     string;
}

export type FavorBoostAllianceName = {
    readonly god: PurpleGod;
}

export type PurpleGod = {
    readonly athena: string;
}

export type GrepolympiaAthleteBoost = {
    readonly effect:                      GrepolympiaAthleteBoostDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        GrepolympiaAthleteBoostDescription;
    readonly description:                 GrepolympiaAthleteBoostDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               CraftingIngredientsBoostMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type GrepolympiaAthleteBoostDescription = {
    readonly type: HilariousType;
}

export type HilariousType = {
    readonly grepolympia_summer:   string;
    readonly grepolympia_winter:   string;
    readonly grepolympia_worldcup: string;
}

export type GrepolympiaChampionship1 = {
    readonly effect:                      GrepolympiaAthleteBoostDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        GrepolympiaAthleteBoostDescription;
    readonly description:                 GrepolympiaAthleteBoostDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null | string;
    readonly temple_level_sum_dependency: number | null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     EffectElement[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               GrepolympiaChampionship1_MetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type GrepolympiaChampionship1_MetaDefaults = {
    readonly percent?:  number;
    readonly lifetime?: number;
    readonly cf_on?:    MetaField;
    readonly type?:     string;
    readonly category?: string;
    readonly amount?:   number;
    readonly level?:    number;
}

export type GridEventAdvancedScouts = {
    readonly effect:                      GridEventAdvancedScoutsDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        GridEventAdvancedScoutsDescription;
    readonly description:                 GridEventAdvancedScoutsDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               CraftingIngredientsBoostMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type GridEventAdvancedScoutsDescription = {
    readonly type: AmbitiousType;
}

export type AmbitiousType = {
    readonly battleships: string;
    readonly gods_gifts:  string;
}

export type HeroicPowerBoostAlliance = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 HeroicPowerBoostAllianceDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 AcumenPowerGroup;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type HeroicPowerBoostAllianceDescription = {
    readonly type: CunningType;
}

export type CunningType = {
    readonly all:                     string;
    readonly naval:                   string;
    readonly ground:                  string;
    readonly "regular_naval#bireme"?: string;
}

export type InstantCurrency = {
    readonly effect:                      InstantCurrencyDescription;
    readonly lifetime:                    number;
    readonly id:                          InstantCurrencyID;
    readonly name:                        InstantCurrencyDescription;
    readonly description:                 InstantCurrencyDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               MetaDefaultsElement;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              DisplayAmount;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type InstantCurrencyDescription = {
    readonly type: PositionClass;
}

export type PositionClass = {
    readonly coins_of_war:     string;
    readonly coins_of_wisdom:  string;
    readonly coins_of_both:    string;
    readonly battle_tokens:    string;
    readonly laurels:          string;
    readonly grid_battleships: string;
    readonly grid_gods_gifts:  string;
    readonly grid_progression: string;
    readonly rota_tyche_coins: string;
}

export type DisplayAmount = {
    readonly type:     MagentaType;
    readonly position: PositionClass;
}

export type MagentaType = {
    readonly coins_of_war:     boolean;
    readonly coins_of_wisdom:  boolean;
    readonly coins_of_both:    boolean;
    readonly battle_tokens:    boolean;
    readonly laurels:          boolean;
    readonly grid_battleships: boolean;
    readonly grid_gods_gifts:  boolean;
    readonly grid_progression: boolean;
    readonly rota_tyche_coins: boolean;
}

export enum InstantCurrencyID {
    InstantCurrency = "instant_currency",
    UnitTrainingBoost = "unit_training_boost",
}

export type InstantCurrencyCRM = {
    readonly effect:                      InstantCurrencyDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        InstantCurrencyDescription;
    readonly description:                 InstantCurrencyDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               InstantCurrencyCRMMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type InstantCurrencyCRMMetaDefaults = {
    readonly amount?:   number;
    readonly type?:     string;
    readonly cf_on?:    MetaField;
    readonly lifetime?: number;
    readonly level?:    number;
    readonly percent?:  number;
}

export type InstantResources = {
    readonly effect:                      NameClass;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        NameClass;
    readonly description:                 string;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               InstantCurrencyCRMMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type NameClass = {
    readonly type: ResourceNames;
}

export type ResourceNames = {
    readonly wood:  string;
    readonly stone: string;
    readonly iron:  string;
    readonly all?:  string;
}

export type LongtermResourceBoost = {
    readonly effect:                      NameClass;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        NameClass;
    readonly description:                 NameClass;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               GrepolympiaChampionship1_MetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type LongtermUnitOrderPenalty = {
    readonly effect:                      LongtermUnitOrderPenaltyDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        LongtermUnitOrderPenaltyDescription;
    readonly description:                 LongtermUnitOrderPenaltyDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               GrepolympiaChampionship1_MetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type LongtermUnitOrderPenaltyDescription = {
    readonly type: FriskyType;
}

export type FriskyType = {
    readonly earthquake: string;
    readonly pest:       string;
}

export type MissionsPower1_Class = {
    readonly effect:                      MissionsPower1_Description;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        MissionsPower1_Description;
    readonly description:                 MissionsPower1_Description;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               GrepolympiaChampionship1_MetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type MissionsPower1_Description = {
    readonly type: MischievousType;
}

export type MischievousType = {
    readonly missionsskinpandora: string;
    readonly missions_dionysia:   string;
}

export type PopulationBoost = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        PopulationBoostName;
    readonly description:                 string;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               MetaDefaultsElement;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type PopulationBoostName = {
    readonly type: BraggadociousType;
}

export type BraggadociousType = {
    readonly small: string;
    readonly big:   string;
    readonly ultra: string;
}

export type PopulationBoostAlliance = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        PopulationBoostAllianceName;
    readonly description:                 string;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 string[];
    readonly meta_defaults:               PopulationBoostAllianceMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type PopulationBoostAllianceMetaDefaults = {
    readonly amount: number;
    readonly god:    string;
}

export type PopulationBoostAllianceName = {
    readonly god: FluffyGod;
}

export type FluffyGod = {
    readonly aphrodite: string;
    readonly ares:      string;
    readonly artemis:   string;
    readonly athena:    string;
    readonly hades:     string;
    readonly hera:      string;
    readonly poseidon:  string;
    readonly zeus:      string;
}

export type ResourceBoost = {
    readonly effect:                      NameClass;
    readonly lifetime:                    number;
    readonly id:                          ResourceBoostID;
    readonly name:                        NameClass;
    readonly description:                 string;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               GrepolympiaChampionship1_MetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export enum ResourceBoostID {
    InstantCurrency = "instant_currency",
    ResourceBoost = "resource_boost",
}

export type ResourceBoostAlliance = {
    readonly effect:                      NameClass;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 NameClass;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              AreaOfEffect[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type RotaEventTychesWreath = {
    readonly effect:                      RotaEventTychesWreathDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        RotaEventTychesWreathDescription;
    readonly description:                 RotaEventTychesWreathDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               CraftingIngredientsBoostMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type RotaEventTychesWreathDescription = {
    readonly type: Type1;
}

export type Type1 = {
    readonly spring:      string;
    readonly epic_battle: string;
}

export type UnitMovementBoostAlliance = {
    readonly effect:                      string;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        UnitMovementBoostAllianceDescription;
    readonly description:                 UnitMovementBoostAllianceDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    SeedsTo[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type UnitMovementBoostAllianceDescription = {
    readonly type: Type2;
}

export type Type2 = {
    readonly all:                                        string;
    readonly "regular_naval|colonization#colonize_ship": string;
}

export type UnitOrderOstAlliance = {
    readonly effect:                      HeroicPowerBoostAllianceDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        HeroicPowerBoostAllianceDescription;
    readonly description:                 HeroicPowerBoostAllianceDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 AttackBoostPowerGroup;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type UnitOrderBoostAllianceHera = {
    readonly effect:                      HeroicPowerBoostAllianceDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        string;
    readonly description:                 HeroicPowerBoostAllianceDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 AttackBoostPowerGroup;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               AttackBoostAllianceMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type WheelFreeRefill = {
    readonly effect:                      WheelFreeRefillDescription;
    readonly lifetime:                    number;
    readonly id:                          string;
    readonly name:                        WheelFreeRefillDescription;
    readonly description:                 WheelFreeRefillDescription;
    readonly short_effect:                null;
    readonly favor:                       number;
    readonly fury_percentage_cost:        number;
    readonly god_id:                      null;
    readonly temple_level_sum_dependency: null;
    readonly targets:                     SeedsTo[];
    readonly only_own_towns:              boolean;
    readonly boost:                       boolean;
    readonly is_fake_power:               boolean;
    readonly area_of_effect:              any[];
    readonly destructive:                 boolean;
    readonly negative:                    boolean;
    readonly extendible:                  boolean;
    readonly power_group:                 string;
    readonly power_group_level:           number;
    readonly seeds_to:                    any[];
    readonly images:                      Images;
    readonly effects:                     any[];
    readonly is_valid_for_happenings:     boolean;
    readonly meta_fields:                 MetaField[];
    readonly meta_defaults:               CraftingIngredientsBoostMetaDefaults;
    readonly removed_on_target_loss:      boolean;
    readonly needs_level:                 boolean;
    readonly requires_god:                boolean;
    readonly ignores_democritus:          boolean;
    readonly display_amount:              boolean;
    readonly wasteable:                   boolean;
    readonly is_ritual:                   boolean;
    readonly recreate_on_restart:         boolean;
    readonly transfer_to_casual_world:    boolean;
    readonly is_onetime_power:            boolean;
    readonly is_upgradable:               boolean;
    readonly is_capped:                   boolean;
    readonly compatible_powers:           any[];
    readonly no_lifetime:                 boolean;
    readonly passive:                     boolean;
}

export type WheelFreeRefillDescription = {
    readonly type: Type3;
}

export type Type3 = {
    readonly nwot: string;
}

export type Progressable = {
    readonly StartTutorialQuest:                        AssignHeroQuest;
    readonly BuildStonerQuest:                          AssignHeroQuest;
    readonly BuildFarmQuest:                            BuildFarmQuestClass;
    readonly BuildLumberMinorQuest:                     AssignHeroQuest;
    readonly BuildIronerQuest:                          AssignHeroQuest;
    readonly BuildStorageQuest:                         AssignHeroQuest;
    readonly ImproveBuildTimeQuest:                     AssignHeroQuest;
    readonly BuildFarmMinorQuest:                       BuildFarmMinorQuest;
    readonly BuildBarracksQuest:                        BuildBarracksQuest;
    readonly RenameTownQuest:                           TownQuest;
    readonly ClaimLoadQuest:                            ClaimLoadQuest;
    readonly ConquerFarmQuest:                          BuildFarmQuestClass;
    readonly RecruitSwordsmanQuest:                     ConquerFarmMinorQuestClass;
    readonly ConquerFarmMinorQuest:                     ConquerFarmMinorQuestClass;
    readonly ConquerFarmMajorQuest:                     ConquerFarmMajorQuest;
    readonly PremiumCaptainQuest:                       ConquerFarmVillage4;
    readonly ClaimLoadPremiumQuest:                     AssignHeroQuest;
    readonly ConquerFarmVillage4:                       ConquerFarmVillage4;
    readonly BuildResourcesMinorQuest:                  AssignHeroQuest;
    readonly BuildStorageMinorQuest:                    RQuest;
    readonly BuildMarketQuest:                          AssignHeroQuest;
    readonly TradeFarmQuest:                            AssignHeroQuest;
    readonly TradePlayerQuest:                          AssignHeroQuest;
    readonly BuildResourcesMajorQuest:                  RQuest;
    readonly BuildStorageMajorQuest:                    AssignHeroQuest;
    readonly PremiumTraderQuest:                        RQuest;
    readonly ConfirmEmailQuest:                         ConfirmEmailQuest;
    readonly BuildMainMinorQuest:                       AssignHeroQuest;
    readonly PremiumCuratorQuest:                       AssignHeroQuest;
    readonly BuildMainMajorQuest:                       AssignHeroQuest;
    readonly BuildSpecialBuildingQuest:                 AssignHeroQuest;
    readonly JoinAllianceQuest:                         JoinAllianceQuest;
    readonly RecruitSwordsmanMinorQuest:                ConquerFarmMinorQuestClass;
    readonly BuildWallQuest:                            AssignHeroQuest;
    readonly BuildTempleQuest:                          AssignHeroQuest;
    readonly ChooseGodQuest:                            BuildTempleMinorQuestClass;
    readonly CastPowerQuest:                            BuildTempleMinorQuestClass;
    readonly RecruitGodsentQuest:                       BuildTempleMinorQuestClass;
    readonly BuildTempleMinorQuest:                     BuildTempleMinorQuestClass;
    readonly PremiumPriestQuest:                        BuildTempleMinorQuestClass;
    readonly InviteFriendQuest:                         AssignHeroQuest;
    readonly BuildAcademyQuest:                         AssignHeroQuest;
    readonly ResearchSlingerQuest:                      AssignHeroQuest;
    readonly RecruitSlingerQuest:                       BuildFarmQuestClass;
    readonly AttackTownQuest:                           TownQuest;
    readonly RecruitSlingerMinorQuest:                  ConquerFarmVillage4;
    readonly WinAttackQuest:                            ConquerFarmVillage4;
    readonly LootResourcesQuest:                        ConquerFarmVillage4;
    readonly PremiumCommanderQuest:                     BuildFarmQuestClass;
    readonly BuildHideQuest:                            AssignHeroQuest;
    readonly StoreIronQuest:                            StoreIronQuest;
    readonly BuildDocksQuest:                           BuildDocksQuestClass;
    readonly TradeSalesmanQuest:                        BuildDocksQuestClass;
    readonly ResearchBiremeQuest:                       RecruitBiremeQuestClass;
    readonly RecruitBiremeQuest:                        RecruitBiremeQuestClass;
    readonly ColonizeShipQuest:                         BuildDocksQuestClass;
    readonly EarlierColonizeShipQuest:                  App2BrowserQuest;
    readonly FoundTownQuest:                            FoundTownQuest;
    readonly ConquerTownQuest:                          ConquerTownQuest;
    readonly BuildAcademyMinorQuest:                    AssignHeroQuest;
    readonly CelebrateGamesQuest:                       AssignHeroQuest;
    readonly CelebratePartyQuest:                       CelebrateQuest;
    readonly RecruitSmallTransporterQuest:              RecruitSmallTransporterQuest;
    readonly RecruitAttackShipQuest:                    RecruitAttackShipQuest;
    readonly WinAttackOverseaQuest:                     RecruitBiremeQuestClass;
    readonly CelebrateTriumphQuest:                     CelebrateQuest;
    readonly AssignHeroQuest:                           AssignHeroQuest;
    readonly TrainHeroQuest:                            AssignHeroQuest;
    readonly FinishIslandQuestWithHero:                 CareForTheWoundedEvilIslandQuest;
    readonly FinishIslandQuestWithoutHero:              AssignHeroQuest;
    readonly SetPlayernameAsGuestQuest:                 SetPlayernameAsGuestQuest;
    readonly RegisterAsGuestQuest:                      AssignHeroQuest;
    readonly Browser2AppQuest:                          Browser2AppQuest;
    readonly App2BrowserQuest:                          App2BrowserQuest;
    readonly FirstAttackSpotQuest:                      AssignHeroQuest;
    readonly BuildFarmingVillage1Quest:                 AssignHeroQuest;
    readonly DemandResourcesBPVQuest:                   BuildFarmQuestClass;
    readonly UpgradeFarmingVillage2Quest:               AssignHeroQuest;
    readonly Win10AttackSpotFightsQuest:                Win10AttackSpotFightsQuest;
    readonly Win25AttackSpotFightsQuest:                Win25AttackSpotFightsQuestClass;
    readonly Win50AttackSpotFightsQuest:                Win25AttackSpotFightsQuestClass;
    readonly Win75AttackSpotFightsQuest:                Win100AttackSpotFightsQuestClass;
    readonly Win100AttackSpotFightsQuest:               Win100AttackSpotFightsQuestClass;
    readonly BuildAcademyLevel10:                       AssignHeroQuest;
    readonly BuildAcademyLevel5:                        AssignHeroQuest;
    readonly BuildBarracksLevel3:                       AssignHeroQuest;
    readonly BuildBarracksLevel5:                       AssignHeroQuest;
    readonly BuildCaveLevel10:                          AssignHeroQuest;
    readonly BuildCaveLevel5:                           AssignHeroQuest;
    readonly BuildDocksLevel10:                         AssignHeroQuest;
    readonly BuildDocksLevel5:                          AssignHeroQuest;
    readonly BuildFarmLevel12:                          AssignHeroQuest;
    readonly BuildFarmLevel5:                           AssignHeroQuest;
    readonly BuildFarmLevel8:                           AssignHeroQuest;
    readonly BuildIronerLevel12:                        AssignHeroQuest;
    readonly BuildIronerLevel2:                         AssignHeroQuest;
    readonly BuildIronerLevel3:                         AssignHeroQuest;
    readonly BuildIronerLevel5:                         AssignHeroQuest;
    readonly BuildIronerLevel8:                         AssignHeroQuest;
    readonly BuildLumberLevel12:                        AssignHeroQuest;
    readonly BuildLumberLevel3:                         AssignHeroQuest;
    readonly BuildLumberLevel5:                         AssignHeroQuest;
    readonly BuildLumberLevel8:                         AssignHeroQuest;
    readonly BuildMarketLevel3:                         AssignHeroQuest;
    readonly BuildMarketLevel5:                         AssignHeroQuest;
    readonly BuildMainLevel12:                          AssignHeroQuest;
    readonly BuildMainLevel3:                           AssignHeroQuest;
    readonly BuildStonerLevel12:                        AssignHeroQuest;
    readonly BuildStonerLevel2:                         AssignHeroQuest;
    readonly BuildStonerLevel3:                         AssignHeroQuest;
    readonly BuildStonerLevel5:                         AssignHeroQuest;
    readonly BuildStonerLevel8:                         AssignHeroQuest;
    readonly BuildStorageLevel12:                       AssignHeroQuest;
    readonly BuildTempleLevel5:                         AssignHeroQuest;
    readonly BuildTempleLevel8:                         AssignHeroQuest;
    readonly BuildMainLevel21Quest:                     App2BrowserQuest;
    readonly BuildMainLevel24Quest:                     App2BrowserQuest;
    readonly BuildSpecialBuildingQuest2:                App2BrowserQuest;
    readonly BuildFarmLevel30Quest:                     App2BrowserQuest;
    readonly BuildFarmLevel45Quest:                     App2BrowserQuest;
    readonly BuildLumberLevel25Quest:                   App2BrowserQuest;
    readonly BuildLumberLevel40Quest:                   App2BrowserQuest;
    readonly BuildIronerLevel25Quest:                   App2BrowserQuest;
    readonly BuildIronerLevel40Quest:                   App2BrowserQuest;
    readonly BuildStonerLevel25Quest:                   App2BrowserQuest;
    readonly BuildStonerLevel40Quest:                   App2BrowserQuest;
    readonly BuildStorageLevel25Quest:                  App2BrowserQuest;
    readonly BuildStorageLevel35Quest:                  App2BrowserQuest;
    readonly BuildTempleLevel20Quest:                   App2BrowserQuest;
    readonly BuildTempleLevel30Quest:                   App2BrowserQuest;
    readonly BuildDocksLevel30Quest:                    App2BrowserQuest;
    readonly BuildBarracksLevel20Quest:                 App2BrowserQuest;
    readonly BuildBarracksLevel30Quest:                 App2BrowserQuest;
    readonly BuildWallLevel15Quest:                     App2BrowserQuest;
    readonly BuildWallLevel25Quest:                     App2BrowserQuest;
    readonly BuildAcademyLevel34Quest:                  App2BrowserQuest;
    readonly RecruitLandDefenseMediumQuest:             App2BrowserQuest;
    readonly RecruitLandDefenseLargeQuest:              App2BrowserQuest;
    readonly RecruitLandDefenseMaximumQuest:            App2BrowserQuest;
    readonly RecruitLandOffensiveMediumQuest:           App2BrowserQuest;
    readonly RecruitLandOffensiveLargeQuest:            App2BrowserQuest;
    readonly RecruitLandOffensiveMaximumQuest:          App2BrowserQuest;
    readonly RecruitShipDefenseMediumQuest:             App2BrowserQuest;
    readonly RecruitShipDefenseLargeQuest:              App2BrowserQuest;
    readonly RecruitShipDefenseMaximumQuest:            App2BrowserQuest;
    readonly RecruitShipOffensiveMediumQuest:           App2BrowserQuest;
    readonly RecruitShipOffensiveLargeQuest:            App2BrowserQuest;
    readonly RecruitShipOffensiveMaximumQuest:          App2BrowserQuest;
    readonly RecruitFlyerMediumQuest:                   App2BrowserQuest;
    readonly RecruitFlyerLargeQuest:                    App2BrowserQuest;
    readonly RecruitFlyerMaximumQuest:                  App2BrowserQuest;
    readonly AllJustAnExploitGoodIslandQuest:           AllJustAnExploitGoodIslandQuestClass;
    readonly AllJustAnExploitEvilIslandQuest:           AllJustAnExploitEvilIslandQuestClass;
    readonly CampOfTheDesperateGoodIslandQuest:         CampOfTheDesperateGoodIslandQuestClass;
    readonly CampOfTheDesperateEvilIslandQuest:         AllJustAnExploitEvilIslandQuestClass;
    readonly ChildOfTheGodsGoodIslandQuest:             CelebrationsOfARulerGoodIslandQuestClass;
    readonly ChildOfTheGodsEvilIslandQuest:             CelebrationsOfARulerEvilIslandQuestClass;
    readonly TheDestroyedShrineGoodIslandQuest:         RiddanceOfThePoorEvilIslandQuestClass;
    readonly TheDestroyedShrineEvilIslandQuest:         CampOfTheDesperateGoodIslandQuestClass;
    readonly TheDesperateVillageEvilIslandQuest:        AllJustAnExploitEvilIslandQuestClass;
    readonly TheDesperateVillageGoodIslandQuest:        AllJustAnExploitGoodIslandQuestClass;
    readonly TheLonePilgrimEvilIslandQuest:             CelebrationsOfARulerEvilIslandQuestClass;
    readonly TheLonePilgrimGoodIslandQuest:             CelebrationsOfARulerGoodIslandQuestClass;
    readonly CaravanWithoutProtectionEvilIslandQuest:   AllJustAnExploitEvilIslandQuestClass;
    readonly CaravanWithoutProtectionGoodIslandQuest:   AllJustAnExploitGoodIslandQuestClass;
    readonly TheStrandedCaptainEvilIslandQuest:         HeroOfThePopulaceEvilIslandQuestClass;
    readonly TheStrandedCaptainGoodIslandQuest:         AllJustAnExploitGoodIslandQuestClass;
    readonly TheTournamentOfTheChariotsEvilIslandQuest: AllJustAnExploitEvilIslandQuestClass;
    readonly TheTournamentOfTheChariotsGoodIslandQuest: RiddanceOfThePoorEvilIslandQuestClass;
    readonly RefugeesOrPreyEvilIslandQuest:             AllJustAnExploitEvilIslandQuestClass;
    readonly RefugeesOrPreyGoodIslandQuest:             AllJustAnExploitGoodIslandQuestClass;
    readonly HeroOfThePopulaceEvilIslandQuest:          HeroOfThePopulaceEvilIslandQuestClass;
    readonly HeroOfThePopulaceGoodIslandQuest:          CrusadeGoodIslandQuestClass;
    readonly CelebrationsOfARulerEvilIslandQuest:       CelebrationsOfARulerEvilIslandQuestClass;
    readonly CelebrationsOfARulerGoodIslandQuest:       CelebrationsOfARulerGoodIslandQuestClass;
    readonly IntrigueOfMerchantsEvilIslandQuest:        AllJustAnExploitEvilIslandQuestClass;
    readonly IntrigueOfMerchantsGoodIslandQuest:        AllJustAnExploitGoodIslandQuestClass;
    readonly TheBrothelEvilIslandQuest:                 AllJustAnExploitEvilIslandQuestClass;
    readonly TheBrothelGoodIslandQuest:                 CelebrationsOfARulerGoodIslandQuestClass;
    readonly TheEpidemicPlagueEvilIslandQuest:          RiddanceOfThePoorEvilIslandQuestClass;
    readonly TheEpidemicPlagueGoodIslandQuest:          CelebrationsOfARulerGoodIslandQuestClass;
    readonly TearOffThePastEvilIslandQuest:             AllJustAnExploitEvilIslandQuestClass;
    readonly TearOffThePastGoodIslandQuest:             CelebrationsOfARulerGoodIslandQuestClass;
    readonly CrusadeEvilIslandQuest:                    CelebrationsOfARulerGoodIslandQuestClass;
    readonly CrusadeGoodIslandQuest:                    CrusadeGoodIslandQuestClass;
    readonly HolyHauntedForestEvilIslandQuest:          AllJustAnExploitEvilIslandQuestClass;
    readonly HolyHauntedForestGoodIslandQuest:          AllJustAnExploitGoodIslandQuestClass;
    readonly QuestionOfMathematicsEvilIslandQuest:      AllJustAnExploitGoodIslandQuestClass;
    readonly QuestionOfMathematicsGoodIslandQuest:      CrusadeGoodIslandQuestClass;
    readonly RiddanceOfThePoorEvilIslandQuest:          RiddanceOfThePoorEvilIslandQuestClass;
    readonly RiddanceOfThePoorGoodIslandQuest:          CampOfTheDesperateGoodIslandQuestClass;
    readonly ThreatFromOutsideEvilIslandQuest:          CrusadeGoodIslandQuestClass;
    readonly ThreatFromOutsideGoodIslandQuest:          CelebrationsOfARulerEvilIslandQuestClass;
    readonly LeonidasPleaEvilIslandQuest:               CareForTheWoundedEvilIslandQuest;
    readonly ReinforcementOfSpartaEvilIslandQuest:      CelebrationsOfARulerGoodIslandQuestClass;
    readonly BuildingTheDefenseLineEvilIslandQuest:     AllJustAnExploitGoodIslandQuestClass;
    readonly FirstWaveEvilIslandQuest:                  DefeatThePersiansEvilIslandQuestClass;
    readonly DistractionEvilIslandQuest:                DistractionEvilIslandQuest;
    readonly DefeatThePersiansEvilIslandQuest:          DefeatThePersiansEvilIslandQuestClass;
    readonly CareForTheWoundedEvilIslandQuest:          CareForTheWoundedEvilIslandQuest;
    readonly PromisingMessageGoodIslandQuest:           GoodIslandQuest;
    readonly LastPreparationsGoodIslandQuest:           CareForTheWoundedEvilIslandQuest;
    readonly LetTheCelebrationBeginGoodIslandQuest:     CelebrationsOfARulerGoodIslandQuestClass;
    readonly AvowalsGoodIslandQuest:                    GoodIslandQuest;
    readonly OwingGratitudeGoodIslandQuest:             CareForTheWoundedEvilIslandQuest;
    readonly CastSpellsTask:                            Task;
    readonly FinishBuildingsTask:                       Task;
    readonly FinishTechnologiesTask:                    Task;
    readonly CompleteIslandQuestsTask:                  Task;
    readonly CompleteUnitsRecruitmentTask:              Task;
    readonly StoreSilverTask:                           Task;
    readonly CollectResourceFromVillageTask:            Task;
}

export type AllJustAnExploitEvilIslandQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       string;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   AllJustAnExploitEvilIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           string;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      Side;
    readonly challenge_type:            string;
}

export type AllJustAnExploitEvilIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             PurpleData;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         InstantCurrencyID;
    readonly configuration:    PurpleConfiguration;
}

export type PurpleConfiguration = {
    readonly type?:     string;
    readonly amount?:   number;
    readonly level?:    number;
    readonly lifetime?: number;
    readonly cf_on?:    MetaField;
}

export type PurpleData = {
    readonly instant_currency?:    number;
    readonly unit_training_boost?: number;
}

export enum Type4 {
    Power = "power",
}

export enum Side {
    Evil = "evil",
}

export type AllJustAnExploitEvilIslandQuestTask = {
    readonly description: string;
    readonly image_class: ImageClass;
}

export type ImageClass = {
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

export type AllJustAnExploitGoodIslandQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null | string;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   AllJustAnExploitGoodIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null | string;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null | string;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      string;
    readonly challenge_type:            string;
}

export type AllJustAnExploitGoodIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             FluffyData;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         ResourceBoostID;
    readonly configuration:    FluffyConfiguration;
}

export type FluffyConfiguration = {
    readonly type?:     MetaDefaultsTypeEnum;
    readonly amount?:   number;
    readonly level?:    number;
    readonly percent?:  number;
    readonly lifetime?: number;
}

export type FluffyData = {
    readonly instant_currency?: number;
    readonly resource_boost?:   number;
}

export type App2BrowserQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   App2BrowserQuestReward[];
    readonly questline:                 Questline;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
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

export type App2BrowserQuestReward = {
    readonly type:      Type5;
    readonly data:      TentacledData;
    readonly stashable: boolean;
}

export type TentacledData = {
    readonly amount: number;
}

export enum Type5 {
    Gold = "gold",
    Resources = "resources",
}

export enum App2BrowserQuestType {
    Quest = "quest",
}

export type AssignHeroQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   AssignHeroQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null | string;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type AssignHeroQuestReward = {
    readonly type:      Type5;
    readonly data:      Resources;
    readonly stashable: boolean;
}

export type TownQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   AttackTownQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type AttackTownQuestReward = {
    readonly type:      string;
    readonly data:      StickyData;
    readonly stashable: boolean;
}

export type StickyData = {
    readonly hoplite: number;
}

export type GoodIslandQuest = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   AvowalsGoodIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null | string;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      string;
    readonly challenge_type:            string;
}

export type AvowalsGoodIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             IndigoData;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    PurpleConfiguration;
}

export type IndigoData = {
    readonly instant_currency?: number;
    readonly forced_loyalty?:   number;
}

export type Browser2AppQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     Browser2AppQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   App2BrowserQuestReward[];
    readonly questline:                 Questline;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type Browser2AppQuestTask = {
    readonly description:       string;
    readonly short_description: string;
    readonly image_class:       ImageClass;
}

export type BuildBarracksQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   BuildBarracksQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type BuildBarracksQuestReward = {
    readonly type:             Type4;
    readonly data:             IndecentData;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    GrepolympiaChampionship1_MetaDefaults;
}

export type IndecentData = {
    readonly unit_order_boost: number;
}

export type BuildDocksQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   BuildDocksQuestReward[];
    readonly questline:                 Questline;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type BuildDocksQuestReward = {
    readonly type:      string;
    readonly data:      HilariousData;
    readonly stashable: boolean;
}

export type HilariousData = {
    readonly big_transporter: number;
}

export type BuildFarmMinorQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   BuildFarmMinorQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type BuildFarmMinorQuestReward = {
    readonly type:             Type4;
    readonly data:             AmbitiousData;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    MetaDefaultsElement;
}

export type AmbitiousData = {
    readonly population_boost: number;
}

export type BuildFarmQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   BuildFarmQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type BuildFarmQuestReward = {
    readonly type:      string;
    readonly data:      CunningData;
    readonly stashable: boolean;
}

export type CunningData = {
    readonly slinger: number;
}

export type RQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   BuildResourcesMajorQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type BuildResourcesMajorQuestReward = {
    readonly type:             Type4;
    readonly data:             MagentaData;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    any[];
}

export type MagentaData = {
    readonly happiness: number;
}

export type BuildTempleMinorQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   BuildTempleMinorQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type BuildTempleMinorQuestReward = {
    readonly type:      string;
    readonly god_name:  string;
    readonly data:      FriskyData;
    readonly stashable: boolean;
}

export type FriskyData = {
    readonly favor: number;
}

export type CampOfTheDesperateGoodIslandQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       string;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   CampOfTheDesperateGoodIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           string;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      string;
    readonly challenge_type:            string;
}

export type CampOfTheDesperateGoodIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             MischievousData;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    FluffyConfiguration;
}

export type MischievousData = {
    readonly instant_currency?:      number;
    readonly rare_unit_order_boost?: number;
}

export type CareForTheWoundedEvilIslandQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype | null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   CareForTheWoundedEvilIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null | string;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      string;
    readonly start_events:              string[];
    readonly progress_events:           string[];
    readonly side?:                     string;
    readonly challenge_type?:           string;
}

export type CareForTheWoundedEvilIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             BraggadociousData;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         InstantCurrencyID;
    readonly configuration:    TentacledConfiguration;
}

export type TentacledConfiguration = {
    readonly type:   MetaDefaultsTypeEnum;
    readonly amount: number;
    readonly level:  number;
}

export type BraggadociousData = {
    readonly instant_currency: number;
}

export type Task = {
    readonly description:         string;
    readonly description_tooltip: string;
    readonly short_description:   string;
    readonly name:                string;
    readonly points:              number;
    readonly end_time:            number;
    readonly force_show_steps:    boolean;
    readonly progress_events:     string[];
    readonly start_events:        any[];
    readonly reward:              any[];
    readonly icon:                string;
    readonly subtype:             string;
    readonly type:                string;
}

export type CelebrateQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   CelebratePartyQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type CelebratePartyQuestReward = {
    readonly type:      string;
    readonly data:      Data1;
    readonly stashable: boolean;
}

export type Data1 = {
    readonly culture: number;
}

export type CelebrationsOfARulerEvilIslandQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       string;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   CelebrationsOfARulerEvilIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           string;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      string;
    readonly challenge_type:            string;
}

export type CelebrationsOfARulerEvilIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             Data2;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    GrepolympiaChampionship1_MetaDefaults;
}

export type Data2 = {
    readonly instant_currency?:  number;
    readonly rare_attack_boost?: number;
}

export type CelebrationsOfARulerGoodIslandQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null | string;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   CelebrationsOfARulerGoodIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null | string;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null | string;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      string;
    readonly challenge_type:            string;
}

export type CelebrationsOfARulerGoodIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             Data3;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         PowerID;
    readonly configuration:    FluffyConfiguration;
}

export type Data3 = {
    readonly instant_currency?: number;
    readonly favor_boost?:      number;
}

export enum PowerID {
    FavorBoost = "favor_boost",
    InstantCurrency = "instant_currency",
}

export type ClaimLoadQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     Browser2AppQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   ClaimLoadQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type ClaimLoadQuestReward = {
    readonly type:      string;
    readonly data:      Data4;
    readonly stashable: boolean;
}

export type Data4 = {
    readonly sword: number;
}

export type ConfirmEmailQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   ConfirmEmailQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              Array<null | string>;
    readonly progress_events:           string[];
}

export type ConfirmEmailQuestReward = {
    readonly type:      Type5;
    readonly data:      Data5;
    readonly stashable: boolean;
}

export type Data5 = {
    readonly gold: number;
}

export type ConquerFarmMajorQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   ConquerFarmMajorQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type ConquerFarmMajorQuestReward = {
    readonly type:      string;
    readonly data:      Data6;
    readonly stashable: boolean;
}

export type Data6 = {
    readonly hoplite: number;
    readonly rider:   number;
}

export type ConquerFarmMinorQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   ConquerFarmMinorQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type ConquerFarmMinorQuestReward = {
    readonly type:      Type5;
    readonly data:      Data7;
    readonly stashable: boolean;
}

export type Data7 = {
    readonly wood: number;
    readonly iron: number;
}

export type ConquerFarmVillage4 = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   ConquerFarmVillage4Reward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type ConquerFarmVillage4Reward = {
    readonly type:      string;
    readonly data:      Data8;
    readonly stashable: boolean;
}

export type Data8 = {
    readonly rider: number;
}

export type ConquerTownQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   ConquerTownQuestReward[];
    readonly questline:                 Questline;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type ConquerTownQuestReward = {
    readonly type:      string;
    readonly data:      Data9;
    readonly stashable: boolean;
}

export type Data9 = {
    readonly archer: number;
}

export type CrusadeGoodIslandQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       string;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   CrusadeGoodIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           string;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      string;
    readonly challenge_type:            string;
}

export type CrusadeGoodIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             Data10;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    FluffyConfiguration;
}

export type Data10 = {
    readonly instant_currency?:   number;
    readonly rare_defense_boost?: number;
}

export type DefeatThePersiansEvilIslandQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   DefeatThePersiansEvilIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               string;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      Side;
    readonly challenge_type:            string;
}

export type DefeatThePersiansEvilIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             Data11;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    GrepolympiaChampionship1_MetaDefaults;
}

export type Data11 = {
    readonly instant_currency?: number;
    readonly defense_boost?:    number;
}

export type DistractionEvilIslandQuest = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   DistractionEvilIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               string;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      Side;
    readonly challenge_type:            string;
}

export type DistractionEvilIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             Data12;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    InstantCurrencyCRMMetaDefaults;
}

export type Data12 = {
    readonly instant_currency?: number;
    readonly attack_boost?:     number;
}

export type FoundTownQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   ClaimLoadQuestReward[];
    readonly questline:                 Questline;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type HeroOfThePopulaceEvilIslandQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       string;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   HeroOfThePopulaceEvilIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           string;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      Side;
    readonly challenge_type:            string;
}

export type HeroOfThePopulaceEvilIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             Data13;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    GrepolympiaChampionship1_MetaDefaults;
}

export type Data13 = {
    readonly instant_currency?:    number;
    readonly unit_movement_boost?: number;
}

export type JoinAllianceQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   JoinAllianceQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type JoinAllianceQuestReward = {
    readonly type:      string;
    readonly data:      ClaimUnitCooldowns;
    readonly stashable: boolean;
}

export type RecruitAttackShipQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   RecruitAttackShipQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type RecruitAttackShipQuestReward = {
    readonly type:      string;
    readonly data:      Data14;
    readonly stashable: boolean;
}

export type Data14 = {
    readonly attack_ship: number;
}

export type RecruitBiremeQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   RecruitBiremeQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type RecruitBiremeQuestReward = {
    readonly type:      string;
    readonly data:      Data15;
    readonly stashable: boolean;
}

export type Data15 = {
    readonly bireme: number;
}

export type RecruitSmallTransporterQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   RecruitSmallTransporterQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
}

export type RecruitSmallTransporterQuestReward = {
    readonly type:      string;
    readonly data:      Data16;
    readonly stashable: boolean;
}

export type Data16 = {
    readonly small_transporter: number;
}

export type RiddanceOfThePoorEvilIslandQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 null;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       string;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   RiddanceOfThePoorEvilIslandQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           string;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      AllJustAnExploitEvilIslandQuestType;
    readonly start_events:              any[];
    readonly progress_events:           string[];
    readonly side:                      string;
    readonly challenge_type:            string;
}

export type RiddanceOfThePoorEvilIslandQuestReward = {
    readonly type:             Type4;
    readonly data:             Data17;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    FluffyConfiguration;
}

export type Data17 = {
    readonly instant_currency?:          number;
    readonly rare_building_order_boost?: number;
}

export type SetPlayernameAsGuestQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   AssignHeroQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              Array<null | string>;
    readonly progress_events:           string[];
}

export type StoreIronQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   StoreIronQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type StoreIronQuestReward = {
    readonly type:      Type5;
    readonly data:      Data18;
    readonly stashable: boolean;
}

export type Data18 = {
    readonly iron: number;
}

export type Win100AttackSpotFightsQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   Win100AttackSpotFightsQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type Win100AttackSpotFightsQuestReward = {
    readonly type:             Type4;
    readonly data:             Data19;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    GrepolympiaChampionship1_MetaDefaults;
}

export type Data19 = {
    readonly epic_resource_boost: number;
}

export type Win10AttackSpotFightsQuest = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   Win10AttackSpotFightsQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type Win10AttackSpotFightsQuestReward = {
    readonly type:             Type4;
    readonly data:             Data20;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    GrepolympiaChampionship1_MetaDefaults;
}

export type Data20 = {
    readonly rare_favor_boost: number;
}

export type Win25AttackSpotFightsQuestClass = {
    readonly steps:                     any[];
    readonly questtype:                 Questtype;
    readonly tasks:                     AllJustAnExploitEvilIslandQuestTask[];
    readonly description:               string;
    readonly description_tooltip:       null;
    readonly short_description:         string;
    readonly name:                      string;
    readonly rewards:                   Win25AttackSpotFightsQuestReward[];
    readonly questline:                 string;
    readonly quest_icon_type:           null;
    readonly auto_accept:               boolean;
    readonly show_introduction_steps:   boolean;
    readonly force_show_steps:          boolean;
    readonly hide_icon_if_not_accepted: boolean;
    readonly accept_on_close:           boolean;
    readonly show_window:               null;
    readonly clearViewOnAccept:         boolean;
    readonly clearViewOnReward:         boolean;
    readonly auto_reward:               boolean;
    readonly or_conditions:             boolean;
    readonly can_abort:                 boolean;
    readonly type:                      App2BrowserQuestType;
    readonly start_events:              string[];
    readonly progress_events:           string[];
}

export type Win25AttackSpotFightsQuestReward = {
    readonly type:             Type4;
    readonly data:             Data21;
    readonly challenge_factor: number;
    readonly stashable:        boolean;
    readonly power_id:         string;
    readonly configuration:    StickyConfiguration;
}

export type StickyConfiguration = {
    readonly type:     string;
    readonly percent:  number;
    readonly lifetime: number;
    readonly level:    number;
}

export type Data21 = {
    readonly rare_resource_boost: number;
}

export type Research = {
    readonly id:                    string;
    readonly name:                  string;
    readonly description:           string;
    readonly research_dependencies: any[];
    readonly building_dependencies: ResearchBuildingDependencies;
    readonly resources:             Resources;
    readonly required_time:         number;
    readonly research_points:       number;
}

export type ResearchBuildingDependencies = {
    readonly academy: number;
}

export type Texts = {
    readonly curator_confirm:   Confirm;
    readonly priest_confirm:    Confirm;
    readonly trader_confirm:    Confirm;
    readonly captain_confirm:   Confirm;
    readonly commander_confirm: Confirm;
}

export type Confirm = {
    readonly title:   string;
    readonly content: string;
    readonly check:   string;
}

