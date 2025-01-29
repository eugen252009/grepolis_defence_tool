export declare const GameData: {
    units: {
        militia: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: null;
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            attack_type: string;
        };
        sword: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: never[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: boolean;
            flying: null;
            attack_type: string;
        };
        slinger: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: boolean;
            flying: null;
            attack_type: string;
        };
        archer: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: boolean;
            flying: null;
            attack_type: string;
        };
        hoplite: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: boolean;
            flying: null;
            attack_type: string;
        };
        rider: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: {
                barracks: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        chariot: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: {
                barracks: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        catapult: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: string[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        minotaur: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        manticore: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: string[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: boolean;
            attack_type: string;
        };
        zyklop: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        harpy: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: string[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: boolean;
            attack_type: string;
        };
        medusa: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        centaur: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        pegasus: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: string[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: boolean;
            attack_type: string;
        };
        cerberus: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        fury: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        griffin: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: string[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: boolean;
            attack_type: string;
        };
        calydonian_boar: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        satyr: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        spartoi: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        ladon: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
                barracks: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: string[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: boolean;
            attack_type: string;
        };
        godsent: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            booty: number;
            infantry: null;
            flying: null;
            attack_type: string;
        };
        big_transporter: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: never[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: string[];
            passive: string;
            is_npc_unit_only: boolean;
            defense: number;
            transport: null;
            capacity: number;
        };
        bireme: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            defense: number;
            transport: null;
            capacity: number;
        };
        attack_ship: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            defense: number;
            transport: null;
            capacity: number;
        };
        demolition_ship: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: string[];
            passive: string;
            is_npc_unit_only: boolean;
            defense: number;
            transport: null;
            capacity: number;
        };
        small_transporter: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: string[];
            passive: string;
            is_npc_unit_only: boolean;
            defense: number;
            transport: null;
            capacity: number;
        };
        trireme: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: null;
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            defense: number;
            transport: null;
            capacity: number;
        };
        colonize_ship: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: null;
            research_dependencies: string[];
            building_dependencies: {
                docks: number;
                academy: number;
            };
            is_naval: boolean;
            max_per_attack: number;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: string[];
            passive: string;
            is_npc_unit_only: boolean;
            defense: number;
            transport: null;
            capacity: number;
        };
        sea_monster: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            defense: number;
            transport: null;
            capacity: number;
        };
        siren: {
            id: string;
            name: string;
            name_plural: string;
            speed: number;
            attack: number;
            description: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            favor: number;
            population: number;
            build_time: number;
            god_id: string;
            research_dependencies: never[];
            building_dependencies: {
                temple: number;
                docks: number;
            };
            is_naval: boolean;
            max_per_attack: null;
            max_per_support: null;
            unit_function: string;
            category: string;
            special_abilities: never[];
            passive: string;
            is_npc_unit_only: boolean;
            defense: number;
            transport: null;
            capacity: number;
        };
    };
    powers: {
        narcissism: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        enlist_militia_penalty: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                level: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        charitable_festival: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        hymn_to_aphrodite: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                claim_percent: number;
                trade_percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        pygmalion: {
            effect: {
                type: {
                    not_cast: string;
                    cast: string;
                };
            };
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
                level_increases: string;
                level_increases_decimals: number;
                level: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        ares_sacrifice: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        ares_army: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        bloodlust: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        spartan_training: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                recruit_percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        divine_sign: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        bolt: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        fair_wind: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        transformation: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        wedding: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        happiness: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        fertility_improvement: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        desire: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        kingly_gift: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        call_of_the_ocean: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        earthquake: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        sea_storm: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        patroness: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        wisdom: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        town_protection: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        strength_of_heroes: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        pest: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        resurrection: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        underworld_treasures: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        cap_of_invisibility: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        natures_gift: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        effort_of_the_huntress: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        illusion: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        cleanse: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        acumen: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                factor: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        divine_senses: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                factor: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        myrmidion_attack: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                attack_percent: number;
                defense_percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        trojan_defense: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                wall_bonus: number;
                militia_bonus: number;
                farm_level_cap: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        resource_boost: {
            effect: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        favor_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_training_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_training_boost_non_scaling: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_favor: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        favor_of_the_gods: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
                type: string;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_resources: {
            effect: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_resources_rare: {
            effect: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_resources_epic: {
            effect: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_currency: {
            effect: {
                type: {
                    coins_of_war: string;
                    coins_of_wisdom: string;
                    coins_of_both: string;
                    battle_tokens: string;
                    laurels: string;
                    grid_battleships: string;
                    grid_gods_gifts: string;
                    grid_progression: string;
                    rota_tyche_coins: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    coins_of_war: string;
                    coins_of_wisdom: string;
                    coins_of_both: string;
                    battle_tokens: string;
                    laurels: string;
                    grid_battleships: string;
                    grid_gods_gifts: string;
                    grid_progression: string;
                    rota_tyche_coins: string;
                };
            };
            description: {
                type: {
                    coins_of_war: string;
                    coins_of_wisdom: string;
                    coins_of_both: string;
                    battle_tokens: string;
                    laurels: string;
                    grid_battleships: string;
                    grid_gods_gifts: string;
                    grid_progression: string;
                    rota_tyche_coins: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: {
                type: {
                    coins_of_war: boolean;
                    coins_of_wisdom: boolean;
                    coins_of_both: boolean;
                    battle_tokens: boolean;
                    laurels: boolean;
                    grid_battleships: boolean;
                    grid_gods_gifts: boolean;
                    grid_progression: boolean;
                    rota_tyche_coins: boolean;
                };
                position: {
                    coins_of_war: string;
                    coins_of_wisdom: string;
                    coins_of_both: string;
                    battle_tokens: string;
                    laurels: string;
                    grid_battleships: string;
                    grid_gods_gifts: string;
                    grid_progression: string;
                    rota_tyche_coins: string;
                };
            };
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_currency_crm: {
            effect: {
                type: {
                    coins_of_war: string;
                    coins_of_wisdom: string;
                    coins_of_both: string;
                    battle_tokens: string;
                    laurels: string;
                    grid_battleships: string;
                    grid_gods_gifts: string;
                    grid_progression: string;
                    rota_tyche_coins: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    coins_of_war: string;
                    coins_of_wisdom: string;
                    coins_of_both: string;
                    battle_tokens: string;
                    laurels: string;
                    grid_battleships: string;
                    grid_gods_gifts: string;
                    grid_progression: string;
                    rota_tyche_coins: string;
                };
            };
            description: {
                type: {
                    coins_of_war: string;
                    coins_of_wisdom: string;
                    coins_of_both: string;
                    battle_tokens: string;
                    laurels: string;
                    grid_battleships: string;
                    grid_gods_gifts: string;
                    grid_progression: string;
                    rota_tyche_coins: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_gold: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        hermes_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        happy_folks: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        attack_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        defense_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        building_order_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_order_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_movement_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        forced_loyalty: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        loyalty_loss: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        attack_penalty: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        defense_penalty: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        illusion_defense_penalty: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        favor_penalty: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        wood_production_penalty: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        stone_production_penalty: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        iron_production_penalty: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        longterm_festival_resource_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        longterm_attack_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        longterm_defense_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        longterm_resource_boost: {
            effect: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            description: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                type: string;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        longterm_unit_order_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        longterm_unit_order_penalty: {
            effect: {
                type: {
                    earthquake: string;
                    pest: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    earthquake: string;
                    pest: string;
                };
            };
            description: {
                type: {
                    earthquake: string;
                    pest: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                category: string;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        luxurious_residence: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                attack_modifier: number;
                defense_modifier: number;
                amount: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        travelling_mentor: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        population_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: {
                type: {
                    small: string;
                    big: string;
                    ultra: string;
                };
            };
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        starter_protection: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: never[];
            meta_defaults: null;
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        a_new_hope: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        great_arming: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        demoralizing_plague: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        demoralized_army: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        sudden_aid: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        wedding_of_the_aristocrats: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        chain_lightning: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        summoning_of_the_nereids: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        help_of_the_nereids: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        passionate_population: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        passionate_training: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        suffering_and_mourning: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent_production: number;
                percent_recruitment: number;
                effect_runtime_hours: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        suffering: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        mourning: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        divine_intervention: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        divine_aura: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        aura_of_healing: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        hero: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        city_skin: {
            effect: string;
            lifetime: number;
            id: string;
            name: {
                type: {
                    fleet_port: string;
                    hades: string;
                    high_temple: string;
                    protectress: string;
                };
            };
            description: {
                type: {
                    fleet_port: string;
                    hades: string;
                    high_temple: string;
                    protectress: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        culture_level: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                level_up: number;
                exact: boolean;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        culture_points: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_resources_mermaid: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
                cf_on: string;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        attack_ship_attack_boost_small: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        attack_ship_attack_boost_medium: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        attack_ship_attack_boost_large: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        longterm_trade_speed_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        assassins_resource_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        assassins_building_order_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        assassins_unit_order_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        assassins_favor_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        assassins_acumen: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        rare_resource_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        epic_resource_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        rare_favor_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        epic_favor_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        rare_building_order_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        epic_building_order_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        rare_unit_order_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        epic_unit_order_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        rare_defense_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        epic_defense_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        rare_attack_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        epic_attack_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_resources_package: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_favor_package: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        instant_unit_package: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        loyalty_resource_boost: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        crafting_ingredients: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                ingredients: {
                    type: string;
                    amount: number;
                }[];
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        crafting_ingredients_boost: {
            effect: {
                type: {
                    easter_skin_demeter: string;
                    easter_skin_incantation: string;
                    easter_skin_easter_hen: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    easter_skin_demeter: string;
                    easter_skin_incantation: string;
                    easter_skin_easter_hen: string;
                };
            };
            description: {
                type: {
                    easter_skin_demeter: string;
                    easter_skin_incantation: string;
                    easter_skin_easter_hen: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        campaign_units: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                campaign_units: {
                    type: string;
                    amount: number;
                }[];
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        mission_units: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                mission_units: {
                    dryads: number;
                };
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        olympic_torch: {
            effect: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            description: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        olympic_merchant: {
            effect: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            description: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        olympic_sword: {
            effect: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            description: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        olympic_senses: {
            effect: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            description: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: number;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                cf_on: string;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        grepolympia_athlete_boost: {
            effect: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            description: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        grepolympia_championship_1: {
            effect: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            description: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        grepolympia_championship_2: {
            effect: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            description: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        grepolympia_championship_3: {
            effect: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            description: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        grepolympia_championship_4: {
            effect: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            description: {
                type: {
                    grepolympia_summer: string;
                    grepolympia_winter: string;
                    grepolympia_worldcup: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        missions_power_1: {
            effect: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            description: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        missions_power_2: {
            effect: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            description: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        missions_power_3: {
            effect: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            description: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        missions_power_4: {
            effect: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            description: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        missions_reduce_ritual_cooldown: {
            effect: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            description: {
                type: {
                    missionsskinpandora: string;
                    missions_dionysia: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        crafting_recipes_power: {
            effect: {
                type: {
                    easter_skin_demeter: string;
                    easter_skin_incantation: string;
                    easter_skin_easter_hen: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    easter_skin_demeter: string;
                    easter_skin_incantation: string;
                    easter_skin_easter_hen: string;
                };
            };
            description: {
                type: {
                    easter_skin_demeter: string;
                    easter_skin_incantation: string;
                    easter_skin_easter_hen: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        wheel_free_refill: {
            effect: {
                type: {
                    nwot: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    nwot: string;
                };
            };
            description: {
                type: {
                    nwot: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        grid_event_advanced_scouts: {
            effect: {
                type: {
                    battleships: string;
                    gods_gifts: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    battleships: string;
                    gods_gifts: string;
                };
            };
            description: {
                type: {
                    battleships: string;
                    gods_gifts: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        rota_event_tyches_wreath: {
            effect: {
                type: {
                    spring: string;
                    epic_battle: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    spring: string;
                    epic_battle: string;
                };
            };
            description: {
                type: {
                    spring: string;
                    epic_battle: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        event_pass_divine_prizes: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        divine_battle_strategy_rare: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: string;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                percent: number;
                type: string;
                limit: {
                    battlepoints: number;
                };
                progress: {
                    battlepoints: number;
                };
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        divine_battle_strategy_epic: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: string;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                percent: number;
                type: string;
                limit: {
                    battlepoints: number;
                };
                progress: {
                    battlepoints: number;
                };
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        naval_battle_strategy_rare: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: string;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                percent: number;
                type: string;
                limit: {
                    battlepoints: number;
                };
                progress: {
                    battlepoints: number;
                };
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: string[];
            no_lifetime: boolean;
            passive: boolean;
        };
        naval_battle_strategy_epic: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: string;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                percent: number;
                type: string;
                limit: {
                    battlepoints: number;
                };
                progress: {
                    battlepoints: number;
                };
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: string[];
            no_lifetime: boolean;
            passive: boolean;
        };
        land_battle_strategy_rare: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: string;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                percent: number;
                type: string;
                limit: {
                    battlepoints: number;
                };
                progress: {
                    battlepoints: number;
                };
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: string[];
            no_lifetime: boolean;
            passive: boolean;
        };
        land_battle_strategy_epic: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: string;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                percent: number;
                type: string;
                limit: {
                    battlepoints: number;
                };
                progress: {
                    battlepoints: number;
                };
                cf_on: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: string[];
            no_lifetime: boolean;
            passive: boolean;
        };
        olympus_mortal_curse: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        blessing_of_olympus: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                lifetime: number;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        ares_rage: {
            effect: {
                type: {
                    cast: string;
                    not_cast: string;
                };
            };
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                level_increases: string;
                level_increases_decimals: number;
                level: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        soterias_shrine: {
            effect: {
                type: {
                    cast: string;
                    not_cast: string;
                };
            };
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                level_increases: string;
                level_increases_decimals: number;
                level: number;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_attack_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        attack_type_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        resource_boost_alliance: {
            effect: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            lifetime: number;
            id: string;
            name: string;
            description: {
                type: {
                    wood: string;
                    stone: string;
                    iron: string;
                    all: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: string[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        mythical_type_attack_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_order_boost_alliance: {
            effect: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                };
            };
            description: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_order_boost_alliance_hera: {
            effect: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                };
            };
            lifetime: number;
            id: string;
            name: string;
            description: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        attack_boost_alliance: {
            effect: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                    regular_ground: string;
                    "all|flying": string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                    regular_ground: string;
                    "all|flying": string;
                };
            };
            description: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                    regular_ground: string;
                    "all|flying": string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        defense_boost_alliance: {
            effect: {
                type: {
                    all: string;
                    naval: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    all: string;
                    naval: string;
                };
            };
            description: {
                type: {
                    all: string;
                    naval: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_movement_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: {
                type: {
                    all: string;
                    "regular_naval|colonization#colonize_ship": string;
                };
            };
            description: {
                type: {
                    all: string;
                    "regular_naval|colonization#colonize_ship": string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_defense_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: string[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        bolt_lightning_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: string;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                min_percent: number;
                max_percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_order_penalty_effect_alliance: {
            effect: {
                type: {
                    earthquake: string;
                    pest: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    earthquake: string;
                    pest: string;
                };
            };
            description: {
                type: {
                    earthquake: string;
                    pest: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
                category: string;
                type: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        attack_defense_boost_alliance: {
            effect: {
                type: {
                    naval: string;
                    regular: string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    naval: string;
                    regular: string;
                };
            };
            description: {
                type: {
                    naval: string;
                    regular: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
                god: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        favor_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: {
                god: {
                    athena: string;
                };
            };
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                god: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        population_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: {
                god: {
                    aphrodite: string;
                    ares: string;
                    artemis: string;
                    athena: string;
                    hades: string;
                    hera: string;
                    poseidon: string;
                    zeus: string;
                };
            };
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
                god: string;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        happiness_power_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        illusion_defense_penalty_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
                lifetime: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        heroic_power_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        favorable_wind_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        wedding_resource_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                amount: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_order_cost_alliance: {
            effect: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                    "regular_naval#bireme": string;
                };
            };
            lifetime: number;
            id: string;
            name: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                    "regular_naval#bireme": string;
                };
            };
            description: {
                type: {
                    all: string;
                    naval: string;
                    ground: string;
                    "regular_naval#bireme": string;
                };
            };
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        unit_attack_defense_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        call_ocean_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: string;
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        huntress_aim_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        return_underworld_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        ares_sacrifice_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        charitable_festival_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        mythical_unit_favor_cost_boost_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: string[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                percent: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
        portal_to_olympus_alliance: {
            effect: string;
            lifetime: number;
            id: string;
            name: string;
            description: string;
            short_effect: null;
            favor: number;
            fury_percentage_cost: number;
            god_id: null;
            temple_level_sum_dependency: null;
            targets: string[];
            only_own_towns: boolean;
            boost: boolean;
            is_fake_power: boolean;
            area_of_effect: never[];
            destructive: boolean;
            negative: boolean;
            extendible: boolean;
            power_group: string;
            power_group_level: number;
            seeds_to: never[];
            images: {
                mini: string;
                small: string;
                medium: string;
                large: string;
            };
            effects: never[];
            is_valid_for_happenings: boolean;
            meta_fields: string[];
            meta_defaults: {
                type: number;
            };
            removed_on_target_loss: boolean;
            needs_level: boolean;
            requires_god: boolean;
            ignores_democritus: boolean;
            display_amount: boolean;
            wasteable: boolean;
            is_ritual: boolean;
            recreate_on_restart: boolean;
            transfer_to_casual_world: boolean;
            is_onetime_power: boolean;
            is_upgradable: boolean;
            is_capped: boolean;
            compatible_powers: never[];
            no_lifetime: boolean;
            passive: boolean;
        };
    };
    map_size: number;
    city_overview: {
        click_map: {
            start_offsets: {
                academy: {
                    x: number;
                    y: number;
                };
                barracks: {
                    x: number;
                    y: number;
                };
                docks: {
                    x: number;
                    y: number;
                };
                farm: {
                    x: number;
                    y: number;
                };
                hide: {
                    x: number;
                    y: number;
                };
                ironer: {
                    x: number;
                    y: number;
                };
                library: {
                    x: number;
                    y: number;
                };
                lighthouse: {
                    x: number;
                    y: number;
                };
                lumber: {
                    x: number;
                    y: number;
                };
                main: {
                    x: number;
                    y: number;
                };
                market: {
                    x: number;
                    y: number;
                };
                oracle: {
                    x: number;
                    y: number;
                };
                ship: {
                    x: number;
                    y: number;
                };
                statue: {
                    x: number;
                    y: number;
                };
                stoner: {
                    x: number;
                    y: number;
                };
                storage: {
                    x: number;
                    y: number;
                };
                temple: {
                    x: number;
                    y: number;
                };
                theater: {
                    x: number;
                    y: number;
                };
                thermal: {
                    x: number;
                    y: number;
                };
                tower: {
                    x: number;
                    y: number;
                };
                trade_office: {
                    x: number;
                    y: number;
                };
                trader: {
                    x: number;
                    y: number;
                };
                wall: {
                    x: number;
                    y: number;
                };
                place: {
                    x: number;
                    y: number;
                };
            };
            map_points: {
                academy: string;
                barracks: string;
                docks: string;
                farm: string;
                hide: string;
                ironer: string;
                library: string;
                lighthouse: string;
                lumber: string;
                main: string;
                market: string;
                oracle: string;
                statue: string;
                stoner: string;
                storage: string;
                temple: string;
                theater: string;
                thermal: string;
                tower: string;
                trade_office: string;
                trader: string;
                wall: string;
                place: string;
            };
        };
    };
    frontendBridge: {
        grepolympia: {
            matches: {
                templates: {
                    page_matches: string;
                    table_header: string;
                    table_row: string;
                    ranking_tooltip: string;
                };
                models: {
                    Grepolympia: {};
                    GrepolympiaDiscipline: {};
                    GrepolympiaMatch: {};
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                };
                collections: {};
            };
            info: {
                templates: {
                    page_info: string;
                    tooltip_award: string;
                    attend_info_popup: string;
                    current_ranking: string;
                    awards: string;
                    rewards: string;
                    alliance_score: string;
                    tutorial: string;
                    tooltip_power: string;
                    reward_tooltip: string;
                };
                models: {
                    GrepolympiaAthlete: {};
                    GrepolympiaDiscipline: {};
                    GrepolympiaDisciplineRanking: {};
                    Grepolympia: {};
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    PlayerAwards: {
                        nofetch: boolean;
                    };
                    PlayerHints: {
                        nofetch: boolean;
                    };
                    GrepolympiaRankings: {};
                };
            };
            training: {
                templates: {
                    training: string;
                    discipline: string;
                    skills: string;
                    top_ranking: string;
                    training_ground: string;
                };
                models: {
                    GrepolympiaAthlete: {};
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    GrepolympiaDiscipline: {};
                    Grepolympia: {};
                };
                collections: {
                    GrepolympiaRankings: {};
                    TrainingOrders: {};
                };
            };
            ranking: {
                templates: {
                    page_ranking: string;
                    ranking_list: string;
                };
                models: {
                    GrepolympiaDisciplineRanking: {};
                    GrepolympiaDiscipline: {};
                    Grepolympia: {};
                };
                collections: {
                    GrepolympiaRankings: {};
                };
            };
            shop: {
                templates: {
                    shop: string;
                    shop_item: string;
                };
                models: {
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    GrepolympiaDiscipline: {};
                };
                collections: {
                    GrepolympiaShopItems: {};
                };
            };
        };
        grepolympiashop: {
            ranking: {
                templates: {
                    page_ranking: string;
                    ranking_list: string;
                };
                models: {
                    GrepolympiaDisciplineRanking: {};
                    Grepolympia: {};
                };
                collections: {
                    GrepolympiaRankings: {};
                };
            };
            shop: {
                templates: {
                    shop: string;
                    shop_item: string;
                };
                models: {
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    GrepolympiaDiscipline: {};
                };
                collections: {
                    GrepolympiaShopItems: {};
                };
            };
        };
        advent: {
            index: {
                templates: {
                    main: string;
                    advisors: string;
                    wheel: string;
                };
                models: {
                    Advent: {};
                    AdventTree: {};
                };
                collections: {
                    AdventSpots: {};
                    AdventCostModifiers: {};
                };
            };
        };
        barracks: {
            index: {
                templates: {
                    index: string;
                    unit_order_box: string;
                    unit_details: string;
                    orders: string;
                    banners: string;
                    no_barracks: string;
                    units_tabs: string;
                };
                models: {
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    PremiumFeatures: {
                        nofetch: boolean;
                    };
                    PhoenicianSalesman: {};
                };
                collections: {
                    Benefits: {};
                    WorldBoosts: {
                        nofetch: boolean;
                    };
                    Towns: {
                        nofetch: boolean;
                    };
                    TownResearches: {
                        nofetch: boolean;
                    };
                    RemainingUnitOrders: {
                        nofetch: boolean;
                    };
                    FeatureBlocks: {
                        nofetch: boolean;
                    };
                };
            };
        };
        docks: {
            index: {
                templates: {
                    index: string;
                    unit_order_box: string;
                    unit_details: string;
                    orders: string;
                    banners: string;
                    no_barracks: string;
                    units_tabs: string;
                };
                models: {
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    PremiumFeatures: {
                        nofetch: boolean;
                    };
                    PhoenicianSalesman: {};
                };
                collections: {
                    Benefits: {};
                    WorldBoosts: {
                        nofetch: boolean;
                    };
                    Towns: {
                        nofetch: boolean;
                    };
                    TownResearches: {
                        nofetch: boolean;
                    };
                    RemainingUnitOrders: {
                        nofetch: boolean;
                    };
                    FeatureBlocks: {
                        nofetch: boolean;
                    };
                };
            };
        };
        dialog: {
            info_all_towns_in_one_group: {
                templates: {
                    default_tmpl: string;
                };
            };
            info_attack_planner_help: {
                templates: {
                    info_attack_planner: string;
                };
            };
            info_create_first_town_group: {
                templates: {
                    default_tmpl: string;
                };
            };
            info_mass_recruit_help: {
                templates: {
                    default_tmpl: string;
                };
            };
            info_phoenician_salesman_help: {
                templates: {
                    default_tmpl: string;
                };
            };
            info_cap_of_invisibility_not_possible_help: {
                templates: {
                    default_tmpl: string;
                };
            };
            go_to_page_default: {
                templates: {
                    go_to_page_window: string;
                };
            };
            save_coordinates_default: {
                templates: {
                    save_coordinates: string;
                };
            };
            interstitial_default: {
                templates: {
                    welcome_screen: string;
                    animated_welcome: string;
                };
            };
            confirmation_window_default: {
                templates: {
                    confirmation_window: string;
                    fatal_attack_warning: string;
                    god_selection_confirmation: string;
                    cast_spell_confirmation: string;
                };
            };
            not_enough_gold_window_default: {
                templates: {
                    not_enough_gold_window_default: string;
                };
            };
            not_enough_gold_window_building_build_cost_reduction: {
                templates: {
                    not_enough_gold_window_building_build_cost_reduction: string;
                };
            };
            not_enough_gold_window_buy_advisor: {
                templates: {
                    not_enough_gold_window_buy_advisor: string;
                };
            };
            not_enough_gold_window_building_build_time: {
                templates: {
                    not_enough_gold_window_building_build_time: string;
                };
            };
            not_enough_gold_window_research_build_time: {
                templates: {
                    not_enough_gold_window_research_build_time: string;
                };
            };
            not_enough_gold_window_unit_orders: {
                templates: {
                    not_enough_gold_window_unit_orders: string;
                };
            };
            not_enough_gold_window_celebrate_olympic_games: {
                templates: {
                    not_enough_gold_window_celebrate_olympic_games: string;
                };
            };
        };
        easter: {
            alchemy: {
                templates: {
                    tab_alchemy: string;
                    progressbar: string;
                    progressbar_tooltip: string;
                    ingredients_box: string;
                    tutorial: string;
                    reward_overlay: string;
                    ranking: string;
                    tooltip_daily_progress: string;
                    sub_window_daily_ranking: string;
                    sub_window_overall_ranking: string;
                    ranking_tooltip: string;
                };
                models: {
                    Easter: {};
                    EasterRanking: {};
                    EasterStats: {};
                };
                collections: {
                    EasterCostModifiers: {};
                    EasterIngredients: {};
                    EasterRecipes: {};
                    PlayerHints: {};
                };
            };
            recipes: {
                templates: {
                    tab_recipes: string;
                    recipes_list: string;
                };
                models: {
                    Easter: {};
                };
                collections: {
                    EasterCostModifiers: {};
                    EasterIngredients: {};
                    EasterRecipes: {};
                    PlayerHints: {};
                };
            };
        };
        easter_collect: {
            index: {
                templates: {
                    main: string;
                };
                models: {
                    Easter: {};
                };
                collections: {
                    EasterDroppedIngredients: {
                        nofetch: boolean;
                    };
                    PlayerHints: {};
                };
            };
        };
        crm_interstitial: {
            index: {
                templates: {
                    crm_index: string;
                };
                models: {};
                collections: {};
            };
        };
        crm_screen: {
            index: {
                templates: {
                    screen_content: string;
                };
                models: {};
                collections: {};
            };
        };
        heroes: {
            overview: {
                templates: {
                    main: string;
                    buy_hero_slot_buttons: string;
                    exchange_currency: string;
                    tooltip_with_arrow: string;
                    instant_buy_tooltip: string;
                };
                models: {
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    Heroes: {};
                    HeroesRecruitment: {};
                };
                collections: {
                    PlayerHeroes: {};
                    FeatureBlocks: {
                        nofetch: boolean;
                    };
                };
            };
            council: {
                templates: {
                    council_main: string;
                    exchange_currency: string;
                };
                models: {
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    Heroes: {};
                    HeroesRecruitment: {};
                };
                collections: {
                    PlayerHeroes: {};
                };
            };
            collection: {
                templates: {
                    collection_main: string;
                    heroes_list: string;
                };
                models: {};
                collections: {
                    PlayerHeroes: {};
                };
            };
        };
        heroes_train: {
            index: {
                templates: {
                    heroes_train: string;
                };
                models: {
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    Heroes: {};
                    PlayerHero: {
                        nofetch: boolean;
                    };
                };
                collections: {};
            };
        };
        heroes_welcome: {
            welcome: {
                templates: {
                    welcome_window: string;
                };
                models: {};
                collections: {
                    PlayerHeroes: {};
                };
            };
        };
        hide: {
            index: {
                templates: {
                    building_hide: string;
                    no_building: string;
                };
                models: {};
                collections: {
                    LastSpyReports: {};
                    Towns: {
                        nofetch: boolean;
                    };
                    MovementsSpys: {
                        nofetch: boolean;
                    };
                };
            };
        };
        inventory: {
            index: {
                templates: {
                    index: string;
                    slot: string;
                };
                models: {
                    Inventory: {
                        nofetch: boolean;
                    };
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    InventoryItems: {
                        nofetch: boolean;
                    };
                    PremiumInventoryItems: {};
                };
            };
        };
        island: {
            index: {
                templates: {
                    index: string;
                };
                models: {};
                collections: {};
            };
        };
        place: {
            support_overview_support_for_active_town: {
                templates: {
                    main: string;
                    list_support: string;
                    list_total_units: string;
                    list_units_in_town: string;
                    list_no_results: string;
                };
                models: {
                    ConstrainedTown: {};
                };
                collections: {
                    SupportForActiveTown: {};
                };
            };
            support_overview_active_town_supports_towns: {
                templates: {
                    main: string;
                    list_support: string;
                    list_total_units: string;
                    list_units_in_town: string;
                    list_no_results: string;
                };
                models: {
                    ConstrainedTown: {};
                };
                collections: {
                    ActiveTownSupportsTowns: {};
                };
            };
            support_overview_active_player_supports_towns: {
                templates: {
                    main: string;
                    list_support: string;
                    list_total_units: string;
                    list_units_in_town: string;
                    list_no_results: string;
                };
                models: {
                    ConstrainedTown: {};
                };
                collections: {
                    ActivePlayerSupportsTowns: {};
                };
            };
            support_overview_active_player_supports_town: {
                templates: {
                    main: string;
                    list_support: string;
                    list_total_units: string;
                    list_units_in_town: string;
                    list_no_results: string;
                };
                models: {
                    ConstrainedTown: {};
                };
                collections: {
                    ActivePlayerSupportsTown: {
                        arguments: {
                            town_id: string;
                        };
                    };
                };
            };
        };
        quest: {
            info: {
                templates: {};
                models: {
                    Progressable: {
                        nofetch: boolean;
                    };
                };
                collections: {};
            };
        };
        quest_progress: {
            progress: {
                templates: {};
                models: {
                    Progressable: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    PlayerHeroes: {
                        nofetch: boolean;
                    };
                };
            };
        };
        quest_welcome: {
            welcome: {
                templates: {};
                models: {
                    Progressable: {
                        nofetch: boolean;
                    };
                    Player: {
                        nofetch: boolean;
                    };
                    PlayerSettings: {
                        nofetch: boolean;
                    };
                };
                collections: {};
            };
        };
        senate: {
            index: {
                templates: {
                    index: string;
                    building: string;
                };
                models: {};
                collections: {};
            };
        };
        hercules2014: {
            index: {
                templates: {
                    main: string;
                    mercenary: string;
                    mercenary_tooltip: string;
                    healer: string;
                    stage: string;
                    sub_window_attack: string;
                    sub_window_fight_result: string;
                    sub_window_last_stage_info: string;
                    reward_container: string;
                    stage_tooltip: string;
                    banner: string;
                    fight_animation: string;
                    event_info: string;
                    tutorial: string;
                    collecting_tooltip: string;
                    healer_tooltip: string;
                    hercules_tooltip: string;
                    ranking: string;
                    sub_window_daily_ranking: string;
                    sub_window_overall_ranking: string;
                    hero_box: string;
                };
                models: {
                    CampaignRanking: {};
                    CampaignPlayerArmy: {};
                    Campaign: {};
                };
                collections: {
                    CampaignPlayerStages: {};
                    PlayerHints: {};
                    CampaignDroppedUnits: {
                        nofetch: boolean;
                    };
                };
            };
        };
        hercules2014_collect: {
            index: {
                templates: {
                    hercules2014_index: string;
                };
                models: {};
                collections: {
                    CampaignDroppedUnits: {
                        nofetch: boolean;
                    };
                    PlayerHints: {};
                };
            };
        };
        storage: {
            index: {
                templates: {
                    index: string;
                    gameborder: string;
                };
                models: {
                    PremiumFeatures: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Towns: {
                        nofetch: boolean;
                    };
                };
            };
        };
        daily_login: {
            index: {
                templates: {
                    index: string;
                    reward_favor: string;
                    reward_resources: string;
                    mystery_box: string;
                    daily_login_days_tooltip: string;
                    daily_login_goblet_tooltip: string;
                };
                models: {
                    DailyLoginBonus: {};
                };
                collections: {};
            };
        };
        world_wonders_welcome: {
            index: {
                templates: {
                    main: string;
                };
                models: {};
                collections: {};
            };
        };
        phoenician_salesman_welcome: {
            index: {
                templates: {
                    main: string;
                };
                models: {};
                collections: {};
            };
        };
        militia_welcome: {
            index: {
                templates: {
                    main: string;
                };
                models: {};
                collections: {};
            };
        };
        gifts_welcome: {
            index: {
                templates: {
                    main: string;
                    gift: string;
                };
                models: {};
                collections: {};
            };
        };
        mobile_tutorial: {
            index: {
                templates: {
                    main: string;
                };
                models: {};
                collections: {
                    PlayerHints: {
                        notfetch: boolean;
                    };
                };
            };
        };
        world_end_welcome: {
            index: {
                templates: {
                    main: string;
                };
                models: {};
                collections: {
                    PlayerHints: {
                        nofetch: boolean;
                    };
                };
            };
        };
        special_offer: {
            index: {
                templates: {
                    index: string;
                };
                models: {};
                collections: {};
            };
        };
        academy: {
            research: {
                templates: {
                    index: string;
                    techtree: string;
                    queue: string;
                    queue_instant_buy: string;
                    advisor_container: string;
                    no_building: string;
                };
                models: {
                    Player: {
                        nofetch: boolean;
                    };
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    PremiumFeatures: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    TownBuildings: {
                        nofetch: boolean;
                    };
                    TownResearches: {
                        nofetch: boolean;
                    };
                    ResearchOrders: {
                        nofetch: boolean;
                    };
                    BuildingOrders: {
                        nofetch: boolean;
                    };
                    Towns: {
                        nofetch: boolean;
                    };
                    PlayerHeroes: {
                        nofetch: boolean;
                    };
                };
            };
            reset: {
                templates: {
                    index: string;
                    techtree: string;
                    queue: string;
                    queue_instant_buy: string;
                    advisor_container: string;
                    no_building: string;
                };
                models: {
                    Player: {
                        nofetch: boolean;
                    };
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    PremiumFeatures: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    TownBuildings: {
                        nofetch: boolean;
                    };
                    TownResearches: {
                        nofetch: boolean;
                    };
                    ResearchOrders: {
                        nofetch: boolean;
                    };
                    BuildingOrders: {
                        nofetch: boolean;
                    };
                    Towns: {
                        nofetch: boolean;
                    };
                };
            };
        };
        gold_trade_interstitial: {
            index: {
                templates: {
                    index: string;
                };
                models: {};
                collections: {};
            };
        };
        notes: {
            note1: {
                templates: {
                    edit: string;
                    preview: string;
                    sub_window_new_note: string;
                    sub_window_rename_note: string;
                    sub_window_delete_note: string;
                };
                models: {};
                collections: {
                    PlayerNotes: {};
                };
            };
            note2: {
                templates: {
                    edit: string;
                    preview: string;
                    sub_window_new_note: string;
                    sub_window_rename_note: string;
                    sub_window_delete_note: string;
                };
                models: {};
                collections: {
                    PlayerNotes: {};
                };
            };
            note3: {
                templates: {
                    edit: string;
                    preview: string;
                    sub_window_new_note: string;
                    sub_window_rename_note: string;
                    sub_window_delete_note: string;
                };
                models: {};
                collections: {
                    PlayerNotes: {};
                };
            };
            note4: {
                templates: {
                    edit: string;
                    preview: string;
                    sub_window_new_note: string;
                    sub_window_rename_note: string;
                    sub_window_delete_note: string;
                };
                models: {};
                collections: {
                    PlayerNotes: {};
                };
            };
            note5: {
                templates: {
                    edit: string;
                    preview: string;
                    sub_window_new_note: string;
                    sub_window_rename_note: string;
                    sub_window_delete_note: string;
                };
                models: {};
                collections: {
                    PlayerNotes: {};
                };
            };
        };
        valentinesday_collect: {
            index: {
                templates: {
                    welcome_screen: string;
                };
                models: {};
                collections: {};
            };
        };
        update_notification: {
            index: {
                templates: {};
                models: {};
                collections: {};
            };
        };
        farm_town: {
            index: {
                templates: {
                    index: string;
                    card: string;
                    locked_card: string;
                    trading: string;
                    locked: string;
                    upgrade_button_tooltip: string;
                    advisor_container: string;
                    claim_tooltip: string;
                };
                models: {
                    PlayerKillpoints: {
                        nofetch: boolean;
                    };
                    PremiumFeatures: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    FarmTownPlayerRelations: {
                        nofetch: boolean;
                    };
                    FarmTowns: {
                        nofetch: boolean;
                    };
                    Towns: {
                        nofetch: boolean;
                    };
                    CastedPowers: {
                        nofetch: boolean;
                    };
                };
            };
        };
        attack_spot: {
            index: {
                templates: {
                    index: string;
                    unit_picker: string;
                };
                models: {
                    PlayerAttackSpot: {
                        nofetch: boolean;
                    };
                    PlayerGods: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Units: {
                        nofetch: boolean;
                    };
                    Towns: {
                        nofetch: boolean;
                    };
                    PlayerHeroes: {
                        nofetch: boolean;
                    };
                };
            };
        };
        attack_spot_victory: {
            index: {
                templates: {
                    index: string;
                };
                models: {
                    PlayerAttackSpot: {
                        nofetch: boolean;
                    };
                };
                collections: {};
            };
        };
        grepolis_score: {
            index: {
                templates: {
                    index: string;
                    world_points_sizer: string;
                    world_points: string;
                    category_page: string;
                    summary: string;
                    award_tooltip: string;
                };
                models: {
                    GrepoScore: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    PlayerAwards: {
                        nofetch: boolean;
                    };
                    GrepoScoreCategoryHashs: {
                        nofetch: boolean;
                    };
                    Benefits: {
                        nofetch: boolean;
                    };
                };
            };
        };
        runtime_info: {
            index: {
                templates: {
                    index: string;
                };
                models: {
                    RuntimeSimulator: {};
                };
                collections: {
                    Units: {
                        nofetch: boolean;
                    };
                    Towns: {
                        nofetch: boolean;
                    };
                };
            };
        };
        market: {
            own_offers: {
                templates: {
                    own_offers: string;
                    own_offer_row: string;
                    own_offer_row_tooltip: string;
                    offer_details: string;
                    no_building: string;
                    no_own_offers_message: string;
                };
                models: {};
                collections: {
                    Towns: {
                        nofetch: boolean;
                    };
                };
            };
            all_offers: {
                templates: {
                    all_offers: string;
                    other_offer_row: string;
                    offer_details: string;
                    no_foreign_offers_message: string;
                    confirm_order: string;
                    no_building: string;
                };
                models: {};
                collections: {
                    Towns: {
                        nofetch: boolean;
                    };
                };
            };
            create: {
                templates: {
                    create_offer: string;
                    no_building: string;
                };
                models: {
                    CreateOffers: {};
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Towns: {
                        nofetch: boolean;
                    };
                };
            };
            premium_exchange: {
                templates: {
                    premium_exchange: string;
                    tab_buy_sell: string;
                    rules: string;
                    resource: string;
                    confirm_order: string;
                    no_building: string;
                };
                models: {};
                collections: {
                    Towns: {
                        nofetch: boolean;
                    };
                };
            };
        };
        no_gold_dialog: {
            index: {
                templates: {
                    index: string;
                };
                models: {};
                collections: {};
            };
        };
        community_goal_reached: {
            index: {
                templates: {
                    index: string;
                };
                models: {};
                collections: {};
            };
        };
        turnovertokens: {
            index: {
                templates: {
                    fight: string;
                    fight_spots: string;
                    arrow: string;
                    sub_window_quiver_empty: string;
                    sub_window_tutorial: string;
                    sub_window_reward_presentation: string;
                    sub_window_assassin_animation: string;
                    sub_window_assassin_animation_arrow: string;
                    sub_window_assassin_animation_points: string;
                    sub_window_all_units_dead_animation: string;
                    sub_window_daily_ranking: string;
                    goals: string;
                    ranking: string;
                    collection_complete: string;
                };
                models: {
                    AssassinsPlayerMetaData: {};
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    AssassinsCommunityGoals: {};
                    AssassinsRanking: {};
                    TurnOverTokenPlayerRanking: {};
                };
                collections: {
                    Benefits: {
                        nofetch: boolean;
                    };
                    AssassinsPlayerSpots: {};
                    PlayerHints: {
                        nofetch: boolean;
                    };
                };
            };
            shop: {
                templates: {
                    shop: string;
                    shop_item: string;
                };
                models: {
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    AssassinsShopItems: {};
                };
            };
            sanctuary: {
                templates: {
                    sanctuary: string;
                    sub_window_tutorial: string;
                };
                models: {
                    AssassinsPlayerMetaData: {};
                };
                collections: {
                    PlayerHints: {
                        nofetch: boolean;
                    };
                };
            };
        };
        spawn: {
            index: {
                templates: {
                    spawn_window: string;
                    sub_window_reward: string;
                    tutorial: string;
                    _missions: string;
                };
                models: {
                    Spawn: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    SpawnMissions: {};
                    Units: {
                        nofetch: boolean;
                    };
                    PlayerHints: {
                        nofetch: boolean;
                    };
                };
            };
        };
        questlog: {
            index: {
                templates: {
                    index: string;
                    quest_index: string;
                    quest_detail: string;
                    category: string;
                    quest: string;
                    iq_quest: string;
                    iq_empty_quest: string;
                    iq_empty_detail: string;
                    iq_quest_detail: string;
                    iq_quest_decision: string;
                    iq_quest_challenge: string;
                    iq_tooltips: string;
                    wnd_attack_npc: string;
                    wnd_collect_units: string;
                    wnd_spend_resources: string;
                    wnd_provoke_attack: string;
                    wnd_bear_effect: string;
                    wnd_wait_time: string;
                    town_groups_list: string;
                };
                models: {
                    PlayerSettings: {
                        nofetch: boolean;
                    };
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    IslandQuestPlayerRelations: {
                        nofetch: boolean;
                    };
                    IslandQuests: {
                        nofetch: boolean;
                    };
                    Units: {
                        nofetch: boolean;
                    };
                    Towns: {
                        nofetch: boolean;
                    };
                    PlayerHeroes: {
                        nofetch: boolean;
                    };
                };
            };
        };
        strategic_map_filter: {
            index: {
                templates: {
                    index: string;
                    highlight: string;
                };
                models: {
                    PremiumFeatures: {
                        nofetch: boolean;
                    };
                    Player: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    CustomColors: {
                        nofetch: boolean;
                    };
                    AlliancePacts: {
                        nofetch: boolean;
                    };
                    PlayerHints: {
                        notfetch: boolean;
                    };
                };
            };
        };
        color_picker: {
            index: {
                templates: {
                    index: string;
                };
                models: {};
                collections: {
                    CustomColors: {
                        nofetch: boolean;
                    };
                };
            };
        };
        custom_colors: {
            index: {
                templates: {
                    index: string;
                    item: string;
                };
                models: {
                    Player: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    CustomColors: {
                        nofetch: boolean;
                    };
                };
            };
        };
        cash_shop: {
            index: {
                templates: {
                    index: string;
                };
                models: {};
                collections: {};
            };
        };
        world_wonder_donations: {
            index: {
                templates: {
                    resources: string;
                    favor: string;
                };
                models: {};
                collections: {
                    WonderParticipations: {};
                };
            };
        };
        flippingimages: {
            index: {
                templates: {
                    index: string;
                };
                models: {};
                collections: {};
            };
        };
        colonization: {
            index: {
                templates: {
                    index: string;
                    unit_picker: string;
                    tooltip_colonizing_info: string;
                    tooltip_island_info: string;
                    requirements: string;
                };
                models: {
                    Colonization: {};
                    PlayerGods: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Units: {
                        nofetch: boolean;
                    };
                    PlayerHeroes: {
                        nofetch: boolean;
                    };
                    Towns: {
                        nofetch: boolean;
                    };
                };
            };
        };
        missions: {
            index: {
                templates: {
                    index: string;
                    mission: string;
                    mission_running: string;
                    details: string;
                    info: string;
                    send_units: string;
                    unit_picker: string;
                    progress: string;
                    mission_result: string;
                    buy_unit: string;
                    indicator_tooltip: string;
                    unit_card: string;
                };
                models: {
                    MissionStatus: {};
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    MissionReport: {};
                    MissionsUnitData: {};
                    MissionsPlayerArmy: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Benefits: {};
                    Towns: {
                        nofetch: boolean;
                    };
                    Missions: {};
                };
            };
            collection: {
                templates: {
                    collection: string;
                    collect_reward: string;
                    rewards_list: string;
                    rewards_list_reward: string;
                    tutorial: string;
                    ranking: string;
                    ranking_rewards: string;
                    overall_ranking: string;
                };
                models: {
                    MissionStatus: {};
                    MissionsRanking: {};
                    MissionsPlayerRanking: {};
                    MissionReport: {};
                    MissionRewards: {};
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Benefits: {};
                    PlayerHints: {
                        nofetch: boolean;
                    };
                    MissionsExtraRewards: {};
                };
            };
        };
        god_selection: {
            index: {
                templates: {
                    index: string;
                    description: string;
                    no_building: string;
                };
                models: {
                    PlayerGods: {
                        nofetch: boolean;
                    };
                    PremiumFeatures: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Towns: {
                        nofetch: boolean;
                    };
                };
            };
            artifacts: {
                templates: {
                    artifacts: string;
                    artifact_card: string;
                };
                models: {
                    Player: {
                        nofetch: boolean;
                    };
                    PlayerGods: {
                        nofetch: boolean;
                    };
                };
                collections: {};
            };
            artifacts_with_levels: {
                templates: {
                    artifacts: string;
                    artifact_card: string;
                };
                models: {
                    Player: {
                        nofetch: boolean;
                    };
                    PlayerGods: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    PlayerArtifacts: {};
                };
            };
        };
        domination: {
            info: {
                templates: {
                    domination_info: string;
                    pre_domination_progress: string;
                    domination_progress: string;
                    domination_rules: string;
                    post_domination_progress: string;
                    post_domination_footer: string;
                    player_ranks_tooltip: string;
                };
                models: {
                    DominationStatus: {};
                    Player: {
                        nofetch: boolean;
                    };
                };
                collections: {};
            };
            status: {
                templates: {
                    domination_status: string;
                    alliance_status: string;
                    alliance_status_empty: string;
                    world_status: string;
                    last_stand: string;
                };
                models: {};
                collections: {
                    AllianceStatusDominations: {};
                    CustomColors: {
                        nofetch: boolean;
                    };
                    Benefits: {
                        nofetch: boolean;
                    };
                };
            };
            ranking: {
                templates: {
                    domination_ranking: string;
                    winner_pedestal: string;
                };
                models: {};
                collections: {
                    CustomColors: {
                        nofetch: boolean;
                    };
                };
            };
        };
        notification_popup: {
            index: {
                templates: {
                    notification_popup: string;
                };
                models: {
                    Player: {
                        nofetch: boolean;
                    };
                };
                collections: {};
            };
        };
        domination_era_started: {
            index: {
                templates: {
                    notification_popup: string;
                };
                models: {
                    Player: {
                        nofetch: boolean;
                    };
                };
                collections: {};
            };
        };
        collected_items: {
            index: {
                templates: {
                    collected_items: string;
                };
                models: {};
                collections: {
                    CollectedItems: {
                        nofetch: boolean;
                    };
                };
            };
        };
        town_overlay: {
            index: {
                templates: {
                    index: string;
                };
                collections: {
                    Benefits: {
                        nofetch: boolean;
                    };
                };
            };
        };
        gridevent: {
            index: {
                templates: {
                    main: string;
                    figure_reward: string;
                    player_grid: string;
                    player_grid_cell_content: string;
                    shop: string;
                    shop_item: string;
                    info_icon_tooltip: string;
                    rewards_list: string;
                    rewards_list_reward: string;
                    reward: string;
                    indicator_tooltip: string;
                    grand_prize_reward_display: string;
                    grand_prize_journey: string;
                    tutorial: string;
                    progression_movement: string;
                };
                models: {
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    PlayerGrid: {};
                    GridEventCollectedItemCount: {};
                    PlayerHappeningMainRewardProgress: {};
                    PlayerEventPass: {};
                };
                collections: {
                    PlayerGridFigureRewards: {};
                    PlayerGridTurns: {};
                    GridEventShopItems: {};
                    GridEventInventoryItems: {};
                    PlayerEventPassRewards: {};
                };
            };
            event_pass: {
                templates: {
                    event_pass_main: string;
                    event_pass_tutorial: string;
                    event_pass_activation_popup: string;
                };
                models: {
                    PlayerGrid: {};
                    PlayerHappeningMainRewardProgress: {};
                    PlayerEventPass: {};
                };
                collections: {
                    PlayerEventPassRewards: {};
                };
            };
        };
        blackfridaysale: {
            index: {
                templates: {
                    black_friday: string;
                };
                models: {};
                collections: {};
            };
        };
        olympus_overview: {
            info: {
                templates: {
                    overview_info: string;
                    overview_info_header: string;
                    rules: string;
                    player_ranks_tooltip: string;
                    overview_post_temple_header: string;
                };
                models: {
                    Olympus: {
                        nofetch: boolean;
                    };
                };
                collections: {};
            };
            small_temples: {
                templates: {
                    overview_small_temples: string;
                    overview_small_temples_header: string;
                    small_temple_row: string;
                    filters: string;
                    overview_post_temple_header: string;
                };
                models: {
                    Olympus: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Temples: {
                        nofetch: boolean;
                    };
                };
            };
            large_temples: {
                templates: {
                    overview_large_temples: string;
                    overview_large_temples_header: string;
                    large_temple_list_item: string;
                    large_temple_list_slider: string;
                    large_temple_silhouette: string;
                    alliance_flag: string;
                    overview_post_temple_header: string;
                };
                models: {
                    Olympus: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Temples: {
                        nofetch: boolean;
                    };
                    CustomColors: {
                        nofetch: boolean;
                    };
                };
            };
            olympus: {
                templates: {
                    overview_olympus: string;
                    overview_olympus_header: string;
                    overview_post_temple_header: string;
                    alliance_flag: string;
                };
                models: {
                    Olympus: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Temples: {
                        nofetch: boolean;
                    };
                    CustomColors: {
                        nofetch: boolean;
                    };
                };
            };
        };
        olympus_temple_info: {
            index: {
                templates: {
                    temple_info: string;
                    command: string;
                    revolt: string;
                    temple_info_image: string;
                    temple_info_image_olympus: string;
                    olympus_curse: string;
                    temple_powers_overlay: string;
                };
                models: {
                    TempleInfo: {};
                    Olympus: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    Temples: {
                        nofetch: boolean;
                    };
                    CustomColors: {
                        nofetch: boolean;
                    };
                };
            };
            temple_defense: {
                templates: {
                    temple_defense: string;
                    defense_list_item: string;
                    temple_defense_slot_wrapper: string;
                };
                models: {
                    TempleInfo: {};
                };
                collections: {
                    Temples: {
                        nofetch: boolean;
                    };
                };
            };
            ranking: {
                templates: {
                    ranking: string;
                    flags_in_background: string;
                };
                models: {
                    OlympusRanking: {};
                    Player: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    CustomColors: {
                        nofetch: boolean;
                    };
                };
            };
        };
        olympus_ranking: {
            index: {
                templates: {
                    ranking: string;
                    flags_in_background: string;
                };
                models: {
                    OlympusRanking: {};
                    Player: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    CustomColors: {
                        nofetch: boolean;
                    };
                };
            };
        };
        rota: {
            index: {
                templates: {
                    index: string;
                    rewards_list: string;
                    rewards_list_reward: string;
                    indicator_tooltip: string;
                    tutorial: string;
                    shop: string;
                    shop_item: string;
                };
                models: {
                    PlayerRota: {};
                    RotaEventData: {};
                    RotaEventCollectedItemCount: {};
                    PlayerLedger: {
                        nofetch: boolean;
                    };
                    PlayerHappeningMainRewardProgress: {};
                    PlayerEventPass: {};
                };
                collections: {
                    RotaEventInventoryItems: {};
                    RotaEventShopItems: {};
                    RotaUnfinishedPaintingElements: {};
                    PlayerEventPassRewards: {};
                };
            };
            event_pass: {
                templates: {
                    event_pass_main: string;
                    event_pass_tutorial: string;
                    event_pass_activation_popup: string;
                };
                models: {
                    RotaEventData: {};
                    PlayerHappeningMainRewardProgress: {};
                    PlayerEventPass: {};
                };
                collections: {
                    PlayerEventPassRewards: {};
                };
            };
        };
        world_wonders_info: {
            ranking: {
                templates: {
                    ranking: string;
                    flags_in_background: string;
                    main_ranking_header_row: string;
                    main_ranking_column: string;
                    wonder_tooltip: string;
                };
                models: {
                    WondersRanking: {};
                    Player: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    CustomColors: {
                        nofetch: boolean;
                    };
                };
            };
            info: {
                templates: {};
                models: {};
                collections: {};
            };
        };
        tasksevent: {
            index: {
                templates: {
                    grand_prize_slot: string;
                    index: string;
                    task: string;
                    tooltip: string;
                    tutorial: string;
                };
                models: {
                    PlayerTasksEvent: {};
                    TasksEventGrandPrize: {};
                };
                collections: {
                    PlayerTasks: {};
                };
            };
        };
        fakeevent: {
            index: {
                templates: {
                    main: string;
                };
            };
        };
        affront: {
            index: {
                templates: {
                    affront: string;
                };
            };
        };
        city_list: {
            index: {
                templates: {
                    city_list: string;
                    town_group: string;
                    city: string;
                };
                models: {};
                collections: {
                    TownGroups: {
                        nofetch: boolean;
                    };
                    TownGroupTowns: {
                        nofetch: boolean;
                    };
                    Attacks: {
                        nofetch: boolean;
                    };
                    Supports: {
                        nofetch: boolean;
                    };
                    IslandQuests: {
                        nofetch: boolean;
                    };
                };
            };
        };
        recruiting_list: {
            index: {
                templates: {
                    recruiting_list: string;
                    unit_order_entry: string;
                };
                models: {};
                collections: {
                    RemainingUnitOrders: {
                        nofetch: boolean;
                    };
                    FeatureBlocks: {
                        nofetch: boolean;
                    };
                };
            };
        };
        construction_list: {
            index: {
                templates: {
                    construction_list: string;
                    construction_order_entry: string;
                    construction_order_empty: string;
                };
                models: {
                    PremiumFeatures: {
                        nofetch: boolean;
                    };
                };
                collections: {
                    BuildingOrders: {
                        nofetch: boolean;
                    };
                    FeatureBlocks: {
                        nofetch: boolean;
                    };
                    Towns: {
                        nofetch: boolean;
                    };
                };
            };
        };
        activities: {
            running_powers: {
                templates: {
                    activities_list: string;
                    running_power: string;
                    no_result: string;
                };
                models: {};
                collections: {
                    CappedPowersProgresses: {
                        nofetch: boolean;
                    };
                    CastedPowers: {
                        nofetch: boolean;
                    };
                    CastedAlliancePowers: {
                        nofetch: boolean;
                    };
                    MovementsSpys: {
                        nofetch: boolean;
                    };
                    MovementsUnits: {
                        nofetch: boolean;
                    };
                    MovementsRevoltsAttacker: {
                        nofetch: boolean;
                    };
                    MovementsRevoltsDefender: {
                        nofetch: boolean;
                    };
                    MovementsColonizations: {
                        nofetch: boolean;
                    };
                    MovementsConquerors: {
                        nofetch: boolean;
                    };
                    TempleCommands: {
                        nofetch: boolean;
                    };
                    Trades: {
                        nofetch: boolean;
                    };
                };
            };
            running_temple_powers: {
                templates: {
                    activities_list: string;
                    running_temple_power: string;
                    no_result: string;
                };
                models: {};
                collections: {
                    CastedPowers: {
                        nofetch: boolean;
                    };
                    CastedAlliancePowers: {
                        nofetch: boolean;
                    };
                    MovementsSpys: {
                        nofetch: boolean;
                    };
                    MovementsUnits: {
                        nofetch: boolean;
                    };
                    MovementsRevoltsAttacker: {
                        nofetch: boolean;
                    };
                    MovementsRevoltsDefender: {
                        nofetch: boolean;
                    };
                    MovementsColonizations: {
                        nofetch: boolean;
                    };
                    MovementsConquerors: {
                        nofetch: boolean;
                    };
                    TempleCommands: {
                        nofetch: boolean;
                    };
                    Trades: {
                        nofetch: boolean;
                    };
                };
            };
            movements: {
                templates: {
                    activities_list: string;
                    movement: string;
                    no_result: string;
                };
                models: {};
                collections: {
                    CastedPowers: {
                        nofetch: boolean;
                    };
                    CastedAlliancePowers: {
                        nofetch: boolean;
                    };
                    MovementsSpys: {
                        nofetch: boolean;
                    };
                    MovementsUnits: {
                        nofetch: boolean;
                    };
                    MovementsRevoltsAttacker: {
                        nofetch: boolean;
                    };
                    MovementsRevoltsDefender: {
                        nofetch: boolean;
                    };
                    MovementsColonizations: {
                        nofetch: boolean;
                    };
                    MovementsConquerors: {
                        nofetch: boolean;
                    };
                    TempleCommands: {
                        nofetch: boolean;
                    };
                    Trades: {
                        nofetch: boolean;
                    };
                };
            };
            temple_commands: {
                templates: {
                    activities_list: string;
                    temple_command: string;
                    no_result: string;
                };
                models: {};
                collections: {
                    CastedPowers: {
                        nofetch: boolean;
                    };
                    CastedAlliancePowers: {
                        nofetch: boolean;
                    };
                    MovementsSpys: {
                        nofetch: boolean;
                    };
                    MovementsUnits: {
                        nofetch: boolean;
                    };
                    MovementsRevoltsAttacker: {
                        nofetch: boolean;
                    };
                    MovementsRevoltsDefender: {
                        nofetch: boolean;
                    };
                    MovementsColonizations: {
                        nofetch: boolean;
                    };
                    MovementsConquerors: {
                        nofetch: boolean;
                    };
                    TempleCommands: {
                        nofetch: boolean;
                    };
                    Trades: {
                        nofetch: boolean;
                    };
                };
            };
            trades: {
                templates: {
                    activities_list: string;
                    trade: string;
                    no_result: string;
                };
                models: {};
                collections: {
                    CastedPowers: {
                        nofetch: boolean;
                    };
                    CastedAlliancePowers: {
                        nofetch: boolean;
                    };
                    MovementsSpys: {
                        nofetch: boolean;
                    };
                    MovementsUnits: {
                        nofetch: boolean;
                    };
                    MovementsRevoltsAttacker: {
                        nofetch: boolean;
                    };
                    MovementsRevoltsDefender: {
                        nofetch: boolean;
                    };
                    MovementsColonizations: {
                        nofetch: boolean;
                    };
                    MovementsConquerors: {
                        nofetch: boolean;
                    };
                    TempleCommands: {
                        nofetch: boolean;
                    };
                    Trades: {
                        nofetch: boolean;
                    };
                };
            };
        };
        eventpass: {
            event_pass: {
                templates: {
                    event_pass_main: string;
                    event_pass_tutorial: string;
                    event_pass_activation_popup: string;
                };
                models: {
                    PlayerEventPass: {};
                    PlayerHappeningMainRewardProgress: {};
                };
                collections: {
                    PlayerEventPassRewards: {};
                };
            };
        };
        quizevent: {
            index: {
                templates: {
                    main: string;
                    info_overlay: string;
                    rewards_list: string;
                    rewards_list_reward: string;
                };
                models: {
                    PlayerQuizEvent: {};
                    PlayerHappeningMainRewardProgress: {};
                };
                collections: {
                    Benefits: {
                        nofetch: boolean;
                    };
                };
            };
        };
    };
    buildings: {
        main: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: never[];
            fixed_building_times: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
                "6": number;
            };
            level_build_time_factors: {
                "7": {
                    level: number;
                    factor: number;
                };
                "8": {
                    level: number;
                    factor: number;
                };
                "9": {
                    level: number;
                    factor: number;
                };
                "10": {
                    level: number;
                    factor: number;
                };
                "11": {
                    level: number;
                    factor: number;
                };
                "12": {
                    level: number;
                    factor: number;
                };
                "13": {
                    level: number;
                    factor: number;
                };
                "14": {
                    level: number;
                    factor: number;
                };
            };
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
            };
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        hide: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: {
                main: number;
                storage: number;
                market: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        place: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: boolean;
            image_levels: number[];
            dependencies: never[];
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        lumber: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: never[];
            fixed_building_times: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
                "6": number;
            };
            level_build_time_factors: {
                "7": {
                    level: number;
                    factor: number;
                };
                "8": {
                    level: number;
                    factor: number;
                };
                "9": {
                    level: number;
                    factor: number;
                };
                "10": {
                    level: number;
                    factor: number;
                };
                "11": {
                    level: number;
                    factor: number;
                };
                "12": {
                    level: number;
                    factor: number;
                };
                "13": {
                    level: number;
                    factor: number;
                };
                "14": {
                    level: number;
                    factor: number;
                };
            };
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        stoner: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: never[];
            fixed_building_times: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
                "6": number;
            };
            level_build_time_factors: {
                "7": {
                    level: number;
                    factor: number;
                };
                "8": {
                    level: number;
                    factor: number;
                };
                "9": {
                    level: number;
                    factor: number;
                };
                "10": {
                    level: number;
                    factor: number;
                };
                "11": {
                    level: number;
                    factor: number;
                };
                "12": {
                    level: number;
                    factor: number;
                };
                "13": {
                    level: number;
                    factor: number;
                };
                "14": {
                    level: number;
                    factor: number;
                };
            };
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        ironer: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: {
                lumber: number;
            };
            fixed_building_times: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
                "6": number;
            };
            level_build_time_factors: {
                "7": {
                    level: number;
                    factor: number;
                };
                "8": {
                    level: number;
                    factor: number;
                };
                "9": {
                    level: number;
                    factor: number;
                };
                "10": {
                    level: number;
                    factor: number;
                };
                "11": {
                    level: number;
                    factor: number;
                };
                "12": {
                    level: number;
                    factor: number;
                };
                "13": {
                    level: number;
                    factor: number;
                };
                "14": {
                    level: number;
                    factor: number;
                };
            };
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        market: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: {
                main: number;
                storage: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        docks: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: {
                main: number;
                lumber: number;
                ironer: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        barracks: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: {
                main: number;
                farm: number;
                ironer: number;
            };
            fixed_building_times: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
                "6": number;
            };
            level_build_time_factors: {
                "7": {
                    level: number;
                    factor: number;
                };
                "8": {
                    level: number;
                    factor: number;
                };
                "9": {
                    level: number;
                    factor: number;
                };
                "10": {
                    level: number;
                    factor: number;
                };
                "11": {
                    level: number;
                    factor: number;
                };
                "12": {
                    level: number;
                    factor: number;
                };
                "13": {
                    level: number;
                    factor: number;
                };
                "14": {
                    level: number;
                    factor: number;
                };
            };
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        wall: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: {
                main: number;
                temple: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
            catapult_factor: number;
            catapult_power: number;
            def_factor_per_level: number;
        };
        storage: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: number;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: never[];
            fixed_building_times: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
                "6": number;
            };
            level_build_time_factors: {
                "7": {
                    level: number;
                    factor: number;
                };
                "8": {
                    level: number;
                    factor: number;
                };
                "9": {
                    level: number;
                    factor: number;
                };
                "10": {
                    level: number;
                    factor: number;
                };
                "11": {
                    level: number;
                    factor: number;
                };
                "12": {
                    level: number;
                    factor: number;
                };
                "13": {
                    level: number;
                    factor: number;
                };
                "14": {
                    level: number;
                    factor: number;
                };
            };
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
                "6": number;
            };
            resourcesForLevelReduceFactor: never[];
            offset_value_map: number[];
            storage_factor: number;
            storage_pow: number;
        };
        farm: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: never[];
            fixed_building_times: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
                "6": number;
            };
            level_build_time_factors: {
                "7": {
                    level: number;
                    factor: number;
                };
                "8": {
                    level: number;
                    factor: number;
                };
                "9": {
                    level: number;
                    factor: number;
                };
                "10": {
                    level: number;
                    factor: number;
                };
                "11": {
                    level: number;
                    factor: number;
                };
                "12": {
                    level: number;
                    factor: number;
                };
                "13": {
                    level: number;
                    factor: number;
                };
                "14": {
                    level: number;
                    factor: number;
                };
            };
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
            };
            resourcesForLevelReduceFactor: never[];
            offset_value_map: number[];
            farm_pow: number;
            farm_factor: number;
        };
        academy: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: {
                main: number;
                farm: number;
                barracks: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        temple: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: null;
            image_levels: number[];
            dependencies: {
                stoner: number;
            };
            fixed_building_times: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
                "6": number;
            };
            level_build_time_factors: {
                "7": {
                    level: number;
                    factor: number;
                };
                "8": {
                    level: number;
                    factor: number;
                };
                "9": {
                    level: number;
                    factor: number;
                };
                "10": {
                    level: number;
                    factor: number;
                };
                "11": {
                    level: number;
                    factor: number;
                };
                "12": {
                    level: number;
                    factor: number;
                };
                "13": {
                    level: number;
                    factor: number;
                };
                "14": {
                    level: number;
                    factor: number;
                };
            };
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: {
                "1": number;
                "2": number;
                "3": number;
                "4": number;
                "5": number;
                "6": number;
                "7": number;
            };
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        theater: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: boolean;
            image_levels: number[];
            dependencies: {
                main: number;
                lumber: number;
                ironer: number;
                docks: number;
                academy: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        thermal: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: boolean;
            image_levels: number[];
            dependencies: {
                main: number;
                farm: number;
                docks: number;
                academy: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
            thermal_pow: number;
        };
        library: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: boolean;
            image_levels: number[];
            dependencies: {
                main: number;
                academy: number;
                docks: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        lighthouse: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: boolean;
            image_levels: number[];
            dependencies: {
                main: number;
                docks: number;
                academy: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        tower: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: boolean;
            image_levels: number[];
            dependencies: {
                main: number;
                wall: number;
                temple: number;
                market: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        statue: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: boolean;
            image_levels: number[];
            dependencies: {
                main: number;
                temple: number;
                market: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        oracle: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: boolean;
            image_levels: number[];
            dependencies: {
                main: number;
                hide: number;
                market: number;
                temple: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
        trade_office: {
            id: string;
            name: string;
            controller: string;
            image: null;
            description: string;
            level: null;
            max_level: number;
            min_level: number;
            requiredBuildings: null;
            coordinates: string;
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            pop: number;
            wood_factor: number;
            stone_factor: number;
            iron_factor: number;
            pop_factor: number;
            hide_factor: null;
            points: number;
            points_factor: number;
            build_time: number;
            build_time_factor: number;
            build_time_reduction: number;
            bolt_protected: boolean;
            image_levels: number[];
            dependencies: {
                main: number;
                market: number;
                temple: number;
            };
            fixed_building_times: never[];
            level_build_time_factors: never[];
            special: boolean;
            resourcesFor: null;
            resourcesForLevelFixed: never[];
            resourcesForLevelFactor: never[];
            resourcesForLevelReduceFactor: never[];
            offset_value_map: never[];
        };
    };
    godPowersTown: {
        aphrodite: {
            "0": string;
            "1": string;
            "2": string;
        };
        ares: {
            "0": string;
            "1": string;
        };
        zeus: {
            "0": string;
            "1": string;
        };
        hera: {
            "0": string;
            "1": string;
            "2": string;
        };
        poseidon: {
            "0": string;
            "1": string;
            "2": string;
        };
        athena: {
            "0": string;
            "1": string;
        };
        hades: {
            "0": string;
            "1": string;
        };
        artemis: {
            "0": string;
            "1": string;
            "2": string;
        };
    };
    godPowersCommand: {
        ares: {
            "0": string;
            "1": string;
        };
        zeus: {
            "0": string;
            "1": string;
        };
        hera: {
            "0": string;
        };
        poseidon: {
            "0": string;
        };
        athena: {
            "0": string;
            "1": string;
        };
        hades: {
            "0": string;
            "1": string;
        };
        artemis: {
            "0": string;
            "1": string;
        };
    };
    inventoryItems: {
        power_reward_effect_inventory_item: {
            type: string;
            name: string;
            description: string;
            properties: never[];
        };
    };
    heroes: {
        agamemnon: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        ajax: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        alexandrios: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        andromeda: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        anysia: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        apheledes: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        argus: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        aristotle: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        atalanta: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        cheiron: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        christopholus: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        deimos: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        democritus: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        daidalos: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        eurybia: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        ferkyon: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        hector: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        helen: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        hercules: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        iason: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        leonidas: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        lysippe: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        medea: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        melousa: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        mihalis: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        odysseus: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        orpheus: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        pariphaistes: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        pelops: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        perseus: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        philoctetes: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        rekonos: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        telemachos: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        terylea: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        themistokles: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        urephon: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        ylestres: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
        zuretha: {
            id: string;
            category: string;
            name: string;
            description: string;
            description_args: {
                "1": {
                    value: number;
                    level_mod: number;
                    unit: string;
                };
            };
            short_description: string;
            default_level: number;
            cost: number;
            award_requirements: never[];
            is_naval: boolean;
            exclusive: boolean;
            hidden: boolean;
            attack_type: string;
            attack: number;
            def_hack: number;
            def_pierce: number;
            def_distance: number;
            speed: number;
            booty: number;
            preconditions: never[];
            max_per_attack: number;
            max_per_support: number;
        };
    };
    progressable: {
        StartTutorialQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStonerQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildFarmQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    slinger: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildLumberMinorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildIronerQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStorageQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ImproveBuildTimeQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildFarmMinorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    population_boost: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    amount: number;
                    type: string;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildBarracksQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    unit_order_boost: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    cf_on: string;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RenameTownQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    hoplite: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ClaimLoadQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                short_description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    sword: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ConquerFarmQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    slinger: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitSwordsmanQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ConquerFarmMinorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ConquerFarmMajorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    hoplite: number;
                    rider: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        PremiumCaptainQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    rider: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ClaimLoadPremiumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ConquerFarmVillage4: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    rider: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildResourcesMinorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
        };
        BuildStorageMinorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    happiness: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: never[];
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildMarketQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        TradeFarmQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        TradePlayerQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildResourcesMajorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    happiness: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: never[];
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
        };
        BuildStorageMajorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        PremiumTraderQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    happiness: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: never[];
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ConfirmEmailQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    gold: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: (string | null)[];
            progress_events: string[];
        };
        BuildMainMinorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        PremiumCuratorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildMainMajorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildSpecialBuildingQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        JoinAllianceQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    sword: number;
                    slinger: number;
                    archer: number;
                    hoplite: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitSwordsmanMinorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildWallQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildTempleQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ChooseGodQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                god_name: string;
                data: {
                    favor: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        CastPowerQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                god_name: string;
                data: {
                    favor: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitGodsentQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                god_name: string;
                data: {
                    favor: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildTempleMinorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                god_name: string;
                data: {
                    favor: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        PremiumPriestQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                god_name: string;
                data: {
                    favor: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        InviteFriendQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    amount: number;
                    wood?: undefined;
                    stone?: undefined;
                    iron?: undefined;
                };
                stashable: boolean;
            } | {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                    amount?: undefined;
                };
                stashable: boolean;
            })[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildAcademyQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ResearchSlingerQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitSlingerQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    slinger: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        AttackTownQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    hoplite: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
        };
        RecruitSlingerMinorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    rider: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
        };
        WinAttackQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    rider: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        LootResourcesQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    rider: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        PremiumCommanderQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    slinger: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildHideQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        StoreIronQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildDocksQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    big_transporter: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        TradeSalesmanQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    big_transporter: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ResearchBiremeQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    bireme: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitBiremeQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    bireme: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ColonizeShipQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    big_transporter: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
        };
        EarlierColonizeShipQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        FoundTownQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    sword: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        ConquerTownQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    archer: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildAcademyMinorQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        CelebrateGamesQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        CelebratePartyQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    culture: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitSmallTransporterQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    small_transporter: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
        };
        RecruitAttackShipQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    attack_ship: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        WinAttackOverseaQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    bireme: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        CelebrateTriumphQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    culture: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        AssignHeroQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        TrainHeroQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        FinishIslandQuestWithHero: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    instant_currency: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        FinishIslandQuestWithoutHero: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        SetPlayernameAsGuestQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: (string | null)[];
            progress_events: string[];
        };
        RegisterAsGuestQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        Browser2AppQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                short_description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        App2BrowserQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        FirstAttackSpotQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildFarmingVillage1Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        DemandResourcesBPVQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    slinger: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        UpgradeFarmingVillage2Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        Win10AttackSpotFightsQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    rare_favor_boost: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    level: number;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        Win25AttackSpotFightsQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    rare_resource_boost: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    level: number;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        Win50AttackSpotFightsQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    rare_resource_boost: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    level: number;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        Win75AttackSpotFightsQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    epic_resource_boost: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    level: number;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        Win100AttackSpotFightsQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    epic_resource_boost: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    level: number;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildAcademyLevel10: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildAcademyLevel5: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildBarracksLevel3: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildBarracksLevel5: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildCaveLevel10: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildCaveLevel5: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildDocksLevel10: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildDocksLevel5: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildFarmLevel12: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildFarmLevel5: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildFarmLevel8: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildIronerLevel12: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildIronerLevel2: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildIronerLevel3: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildIronerLevel5: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildIronerLevel8: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildLumberLevel12: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildLumberLevel3: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildLumberLevel5: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildLumberLevel8: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildMarketLevel3: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildMarketLevel5: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildMainLevel12: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildMainLevel3: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStonerLevel12: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStonerLevel2: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStonerLevel3: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStonerLevel5: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStonerLevel8: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStorageLevel12: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildTempleLevel5: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildTempleLevel8: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildMainLevel21Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildMainLevel24Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildSpecialBuildingQuest2: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildFarmLevel30Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildFarmLevel45Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildLumberLevel25Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildLumberLevel40Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildIronerLevel25Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildIronerLevel40Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStonerLevel25Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStonerLevel40Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStorageLevel25Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildStorageLevel35Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildTempleLevel20Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildTempleLevel30Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildDocksLevel30Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildBarracksLevel20Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildBarracksLevel30Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildWallLevel15Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildWallLevel25Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        BuildAcademyLevel34Quest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitLandDefenseMediumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitLandDefenseLargeQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitLandDefenseMaximumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitLandOffensiveMediumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitLandOffensiveLargeQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitLandOffensiveMaximumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitShipDefenseMediumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitShipDefenseLargeQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitShipDefenseMaximumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitShipOffensiveMediumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitShipOffensiveLargeQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitShipOffensiveMaximumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitFlyerMediumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitFlyerLargeQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        RecruitFlyerMaximumQuest: {
            steps: never[];
            questtype: string;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    amount: number;
                };
                stashable: boolean;
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: string[];
            progress_events: string[];
        };
        AllJustAnExploitGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    resource_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    resource_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        AllJustAnExploitEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_training_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_training_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    lifetime: number;
                    cf_on: string;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        CampOfTheDesperateGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_unit_order_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_unit_order_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    level: number;
                    type?: undefined;
                    amount?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        CampOfTheDesperateEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_training_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_training_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    lifetime: number;
                    cf_on: string;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        ChildOfTheGodsGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    favor_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    favor_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        ChildOfTheGodsEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_attack_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_attack_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheDestroyedShrineGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_building_order_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_building_order_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    level: number;
                    type?: undefined;
                    amount?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        TheDestroyedShrineEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_unit_order_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_unit_order_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    level: number;
                    type?: undefined;
                    amount?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheDesperateVillageEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_training_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_training_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    lifetime: number;
                    cf_on: string;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheDesperateVillageGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    resource_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    resource_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheLonePilgrimEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_attack_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_attack_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheLonePilgrimGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    favor_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    favor_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        CaravanWithoutProtectionEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_training_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_training_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    lifetime: number;
                    cf_on: string;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        CaravanWithoutProtectionGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    resource_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    resource_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheStrandedCaptainEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_movement_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_movement_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    cf_on: string;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheStrandedCaptainGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    resource_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    resource_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheTournamentOfTheChariotsEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_training_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_training_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    amount: number;
                    type: string;
                    lifetime: number;
                    cf_on: string;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheTournamentOfTheChariotsGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_building_order_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_building_order_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    level: number;
                    type?: undefined;
                    amount?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        RefugeesOrPreyEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_training_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_training_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    amount: number;
                    type: string;
                    lifetime: number;
                    cf_on: string;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        RefugeesOrPreyGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    resource_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    resource_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        HeroOfThePopulaceEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_movement_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_movement_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    cf_on: string;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        HeroOfThePopulaceGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_defense_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_defense_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        CelebrationsOfARulerEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_attack_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_attack_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        CelebrationsOfARulerGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    favor_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    favor_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        IntrigueOfMerchantsEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_training_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_training_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    lifetime: number;
                    cf_on: string;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        IntrigueOfMerchantsGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    resource_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    resource_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheBrothelEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_training_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_training_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    lifetime: number;
                    cf_on: string;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TheBrothelGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    favor_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    favor_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        TheEpidemicPlagueEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_building_order_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_building_order_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    level: number;
                    type?: undefined;
                    amount?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        TheEpidemicPlagueGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    favor_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    favor_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        TearOffThePastEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_training_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_training_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    lifetime: number;
                    cf_on: string;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        TearOffThePastGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    favor_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    favor_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        CrusadeEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    favor_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    favor_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        CrusadeGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_defense_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_defense_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        HolyHauntedForestEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    unit_training_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    unit_training_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    lifetime: number;
                    cf_on: string;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        HolyHauntedForestGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    resource_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    resource_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        QuestionOfMathematicsEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    resource_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    resource_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        QuestionOfMathematicsGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_defense_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_defense_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        RiddanceOfThePoorEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_building_order_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_building_order_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    level: number;
                    type?: undefined;
                    amount?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        RiddanceOfThePoorGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_unit_order_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_unit_order_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    level: number;
                    type?: undefined;
                    amount?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        ThreatFromOutsideEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_defense_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_defense_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        ThreatFromOutsideGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    rare_attack_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    rare_attack_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: string;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        LeonidasPleaEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    instant_currency: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        ReinforcementOfSpartaEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    favor_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    favor_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        BuildingTheDefenseLineEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    resource_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    resource_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    percent: number;
                    lifetime: number;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        FirstWaveEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    defense_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    defense_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    cf_on: string;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        DistractionEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    attack_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    attack_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    cf_on: string;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        DefeatThePersiansEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    defense_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    defense_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    cf_on: string;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        CareForTheWoundedEvilIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    instant_currency: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        PromisingMessageGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: never[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    forced_loyalty?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    forced_loyalty: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    lifetime: number;
                    cf_on: string;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: null;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: never[];
            side: string;
            challenge_type: string;
        };
        LastPreparationsGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    instant_currency: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        LetTheCelebrationBeginGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    favor_boost?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    percent?: undefined;
                    lifetime?: undefined;
                };
            } | {
                type: string;
                data: {
                    favor_boost: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    percent: number;
                    lifetime: number;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        AvowalsGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: ({
                type: string;
                data: {
                    instant_currency: number;
                    forced_loyalty?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                    lifetime?: undefined;
                    cf_on?: undefined;
                };
            } | {
                type: string;
                data: {
                    forced_loyalty: number;
                    instant_currency?: undefined;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    lifetime: number;
                    cf_on: string;
                    type?: undefined;
                    amount?: undefined;
                    level?: undefined;
                };
            })[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        OwingGratitudeGoodIslandQuest: {
            steps: never[];
            questtype: null;
            tasks: {
                description: string;
                image_class: {
                    type: string;
                    name: string;
                };
            }[];
            description: string;
            description_tooltip: null;
            short_description: string;
            name: string;
            rewards: {
                type: string;
                data: {
                    instant_currency: number;
                };
                challenge_factor: number;
                stashable: boolean;
                power_id: string;
                configuration: {
                    type: string;
                    amount: number;
                    level: number;
                };
            }[];
            questline: string;
            quest_icon_type: null;
            auto_accept: boolean;
            show_introduction_steps: boolean;
            force_show_steps: boolean;
            hide_icon_if_not_accepted: boolean;
            accept_on_close: boolean;
            show_window: string;
            clearViewOnAccept: boolean;
            clearViewOnReward: boolean;
            auto_reward: boolean;
            or_conditions: boolean;
            can_abort: boolean;
            type: string;
            start_events: never[];
            progress_events: string[];
            side: string;
            challenge_type: string;
        };
        CastSpellsTask: {
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            points: number;
            end_time: number;
            force_show_steps: boolean;
            progress_events: string[];
            start_events: never[];
            reward: never[];
            icon: string;
            subtype: string;
            type: string;
        };
        FinishBuildingsTask: {
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            points: number;
            end_time: number;
            force_show_steps: boolean;
            progress_events: string[];
            start_events: never[];
            reward: never[];
            icon: string;
            subtype: string;
            type: string;
        };
        FinishTechnologiesTask: {
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            points: number;
            end_time: number;
            force_show_steps: boolean;
            progress_events: string[];
            start_events: never[];
            reward: never[];
            icon: string;
            subtype: string;
            type: string;
        };
        CompleteIslandQuestsTask: {
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            points: number;
            end_time: number;
            force_show_steps: boolean;
            progress_events: string[];
            start_events: never[];
            reward: never[];
            icon: string;
            subtype: string;
            type: string;
        };
        CompleteUnitsRecruitmentTask: {
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            points: number;
            end_time: number;
            force_show_steps: boolean;
            progress_events: string[];
            start_events: never[];
            reward: never[];
            icon: string;
            subtype: string;
            type: string;
        };
        StoreSilverTask: {
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            points: number;
            end_time: number;
            force_show_steps: boolean;
            progress_events: string[];
            start_events: never[];
            reward: never[];
            icon: string;
            subtype: string;
            type: string;
        };
        CollectResourceFromVillageTask: {
            description: string;
            description_tooltip: string;
            short_description: string;
            name: string;
            points: number;
            end_time: number;
            force_show_steps: boolean;
            progress_events: string[];
            start_events: never[];
            reward: never[];
            icon: string;
            subtype: string;
            type: string;
        };
    };
    campaignUnits: {
        "0": {
            type: string;
            name: string;
            fight_value: number;
            bonus1: string;
            bonus2: string;
            base_costs: number;
            default_amount: number;
            drop_chance: number;
        };
        "1": {
            type: string;
            name: string;
            fight_value: number;
            bonus1: string;
            bonus2: null;
            base_costs: number;
            default_amount: number;
            drop_chance: number;
        };
        "2": {
            type: string;
            name: string;
            fight_value: number;
            bonus1: string;
            bonus2: string;
            base_costs: number;
            default_amount: number;
            drop_chance: number;
        };
        "3": {
            type: string;
            name: string;
            fight_value: number;
            bonus1: string;
            bonus2: null;
            base_costs: number;
            default_amount: number;
            drop_chance: number;
        };
        "4": {
            type: string;
            name: string;
            fight_value: number;
            bonus1: string;
            bonus2: string;
            base_costs: number;
            default_amount: number;
            drop_chance: number;
        };
    };
    campaignStages: {
        "1": {
            id: number;
            name: string;
            previous_stage_ids: {};
            unit_capacity: number;
            units: {
                unit_1: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "2": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_2: number;
                unit_4: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "3": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_3: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "4": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "5": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_2: number;
                unit_3: number;
                unit_4: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "6": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_2: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "7": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_3: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "8": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_3: number;
                unit_4: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "9": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_2: number;
                unit_4: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "10": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_4: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "11": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_3: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "12": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_2: number;
                unit_3: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "13": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_3: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "14": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_3: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "15": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_2: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "16": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
                "1": number;
            };
            unit_capacity: number;
            units: {
                unit_2: number;
                unit_4: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "17": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_2: number;
                unit_4: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "18": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "19": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_2: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "20": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_2: number;
                unit_4: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "21": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
                "1": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_2: number;
                unit_3: number;
                unit_4: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "22": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "23": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_3: number;
                unit_4: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "24": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_2: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "25": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
                "1": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "26": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_4: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "27": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_2: number;
                unit_3: number;
                unit_4: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "28": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_2: number;
                unit_3: number;
                unit_4: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "29": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_2: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "30": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_3: number;
                unit_4: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "31": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_2: number;
                unit_3: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: null;
        };
        "32": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_2: number;
                unit_3: number;
                unit_4: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            story_id: number;
        };
        "33": {
            id: number;
            name: string;
            previous_stage_ids: {
                "0": number;
            };
            unit_capacity: number;
            units: {
                unit_1: number;
                unit_3: number;
                unit_5: number;
            };
            reward: {
                type: string;
                subtype: string;
                level: number;
            };
            onetime_rewards: {
                "0": {
                    type: string;
                    subtype: string;
                    level: number;
                };
            };
            story_id: number;
        };
    };
    campaignMeta: {
        healer_cooldown: number;
        hero_cooldown: number;
        stage_cooldown: number;
        primary_bonus: number;
        secondary_bonus: number;
        healer_base_cost: number;
        hercules_base_cost: number;
        "max_amount_of_drop_units ": number;
    };
    building: {
        build_cost_reduction_factor: number;
        build_cost_reduction: number;
    };
    island_quests: {
        exchange_quest_cost: number;
        skip_cooldown_cost: number;
    };
    heroes_meta: {
        premium_slot_cost: number;
        premium_rotate_offer_cost_gold: number;
        premium_halve_cure_cost: number;
        max_level: number;
        max_heroes: number;
        max_heroes_per_town: number;
        max_heroes_per_command: number;
        time_to_cure: number;
        time_limit_for_halving_cure: number;
        town_travel_time: number;
        coins_exchange_offer_denominator: number;
        coins_exchange_offer_numerator: number;
    };
    crafting_meta: {
        default_cost_factor: number;
        easter: {
            recipe_cost: number;
        };
    };
    inventory: {
        cost_of_extension: {
            "11": number;
            "16": number;
        };
        start_amount_of_slots: number;
        total_amount_of_slots: number;
    };
    research_bonus: {
        berth: number;
        meteorology_speed: number;
        cartography_speed: number;
        colony_ship_speed: number;
        pottery_storage: number;
        catapult_speed: number;
        favor_loot_per_unit: number;
        conscription_bonus: number;
        mathematics_bonus: number;
        instructor_bonus: number;
        fertility_improvement_bonus: number;
        shipwright_bonus: number;
        call_of_the_ocean_bonus: number;
        building_crane_bonus: number;
        architecture_bonus: number;
        pottery_storage_bonus: number;
        diplomacy_resources_bonus: number;
    };
    min_main_level_for_tear_down: number;
    colonization_requirements: {
        docks: number;
        academy: number;
    };
    resources: {
        wood: string;
        stone: string;
        iron: string;
    };
    resource_names: {
        wood: string;
        stone: string;
        iron: string;
        all: string;
    };
    researches: {
        slinger: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        archer: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        town_guard: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        hoplite: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        meteorology: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        espionage: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        booty: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        pottery: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        rider: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        architecture: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        instructor: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        bireme: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        building_crane: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        shipwright: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        colonize_ship: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        chariot: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        attack_ship: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        conscription: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        demolition_ship: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        catapult: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        cryptography: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        democracy: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        small_transporter: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        plow: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        berth: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        trireme: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        phalanx: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        breach: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        mathematics: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        ram: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        cartography: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        take_over: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        stone_storm: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        temple_looting: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        divine_selection: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        combat_experience: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        strong_wine: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
        set_sail: {
            id: string;
            name: string;
            description: string;
            research_dependencies: never[];
            building_dependencies: {
                academy: number;
            };
            resources: {
                wood: number;
                stone: number;
                iron: number;
            };
            required_time: number;
            research_points: number;
        };
    };
    farm_town_time_values: {
        normal: number[];
        booty: number[];
    };
    farm_town: {
        building_requirements: {
            resources: {
                "1": {
                    building: string;
                    level: number;
                };
                "2": {
                    building: string;
                    level: number;
                };
                "3": {
                    building: string;
                    level: number;
                };
                "4": {
                    building: string;
                    level: number;
                };
            };
            units: {
                "1": {
                    building: string;
                    level: number;
                };
                "2": {
                    building: string;
                    level: number;
                };
                "3": {
                    building: string;
                    level: number;
                };
                "4": {
                    building: string;
                    level: number;
                };
            };
        };
        expansion_times: {
            "2": number;
            "3": number;
            "4": number;
            "5": number;
            "6": number;
        };
        expansion_costs: {
            "2": number;
            "3": number;
            "4": number;
            "5": number;
            "6": number;
        };
        unlock_costs: {
            "1": number;
            "2": number;
            "3": number;
            "4": number;
            "5": number;
            "6": number;
        };
        claim_resource_cooldowns_normal: number[];
        claim_resource_cooldowns_booty: number[];
        claim_units: {
            "1": {
                sword: number;
                slinger: number;
                archer: number;
                hoplite: number;
            };
            "2": {
                sword: number;
                slinger: number;
                archer: number;
                hoplite: number;
            };
            "3": {
                sword: number;
                slinger: number;
                archer: number;
                hoplite: number;
            };
            "4": {
                sword: number;
                slinger: number;
                archer: number;
                hoplite: number;
            };
            "5": {
                sword: number;
                slinger: number;
                archer: number;
                hoplite: number;
            };
            "6": {
                sword: number;
                slinger: number;
                archer: number;
                hoplite: number;
            };
        };
        claim_unit_cooldowns: {
            sword: number;
            slinger: number;
            archer: number;
            hoplite: number;
        };
        max_resources_per_day: {
            "1": number;
            "2": number;
            "3": number;
            "4": number;
            "5": number;
            "6": number;
        };
    };
    unit_order_refund_factor: number;
    FarmMouseOverTemplate: string;
    ConfirmDialogTemplate: string;
    dailyBonusStatic: {
        name: string;
        description: string;
        num_levels: number;
        login_in_a_row_highest: number;
        rewards_list: {
            resources: number;
            favor: number;
            title: string;
        }[];
        mystic_rewards: ({
            id: null;
            type: string;
            power_id: string;
            subtype: string;
            configuration: {
                type: string;
                amount: number;
                lifetime: number;
                level: number;
                percent?: undefined;
                wall_bonus?: undefined;
                militia_bonus?: undefined;
                farm_level_cap?: undefined;
            };
            level: number;
            stashable: boolean;
        } | {
            id: null;
            type: string;
            power_id: string;
            subtype: string;
            configuration: {
                percent: number;
                lifetime: number;
                level: number;
                type?: undefined;
                amount?: undefined;
                wall_bonus?: undefined;
                militia_bonus?: undefined;
                farm_level_cap?: undefined;
            };
            level: number;
            stashable: boolean;
        } | {
            id: null;
            type: string;
            power_id: string;
            subtype: number;
            configuration: {
                lifetime: number;
                wall_bonus: number;
                militia_bonus: number;
                farm_level_cap: number;
                type?: undefined;
                amount?: undefined;
                level?: undefined;
                percent?: undefined;
            };
            level: number;
            stashable: boolean;
        } | {
            id: null;
            type: string;
            power_id: string;
            subtype: string;
            configuration: {
                amount: number;
                level: number;
                type?: undefined;
                lifetime?: undefined;
                percent?: undefined;
                wall_bonus?: undefined;
                militia_bonus?: undefined;
                farm_level_cap?: undefined;
            };
            level: number;
            stashable: boolean;
        } | {
            id: null;
            type: string;
            power_id: string;
            subtype: string;
            configuration: {
                type: string;
                amount: number;
                level: number;
                lifetime?: undefined;
                percent?: undefined;
                wall_bonus?: undefined;
                militia_bonus?: undefined;
                farm_level_cap?: undefined;
            };
            level: number;
            stashable: boolean;
        })[][];
    };
    celebration_cost: number;
    additional_runtime_modifier: {
        default_unit_movement_boost: number;
        lighthouse_speed_bonus: number;
    };
    godPowersForOtherTowns: {
        aphrodite: string[];
        ares: {
            "1": string;
        };
        zeus: string[];
        hera: string[];
        poseidon: string[];
        athena: string[];
        hades: string[];
        artemis: string[];
    };
    cancel_times: {
        trades: number;
        unit_movements: number;
        espionage: number;
    };
    events: {
        assassins: {
            tiers: {
                "1": {
                    amount: number;
                    points: number;
                };
                "2": {
                    amount: number;
                    points: number;
                };
                "3": {
                    amount: number;
                    points: number;
                };
                "4": {
                    amount: number;
                    points: number;
                };
            };
            premium: {
                spots_reset_costs: number;
                buy_arrows_costs: number;
                buy_arrows_amount: number;
            };
        };
    };
    default_flag_colors: {
        lost_town: string;
        current_player: string;
        own_alliance: string;
        default_player: string;
        invite_friend: string;
        enemy: string;
        pact: string;
    };
    gods: {
        zeus: {
            name: string;
            id: string;
            units: ({
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: never[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: null;
                attack_type: string;
            } | {
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: string[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: boolean;
                attack_type: string;
            })[];
            powers: string[];
            topic: string;
            description: string;
        };
        poseidon: {
            name: string;
            id: string;
            units: ({
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: never[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: null;
                attack_type: string;
                defense?: undefined;
                transport?: undefined;
                capacity?: undefined;
            } | {
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: never[];
                passive: string;
                is_npc_unit_only: boolean;
                defense: number;
                transport: null;
                capacity: number;
                def_hack?: undefined;
                def_pierce?: undefined;
                def_distance?: undefined;
                booty?: undefined;
                infantry?: undefined;
                flying?: undefined;
                attack_type?: undefined;
            })[];
            powers: string[];
            topic: string;
            description: string;
        };
        hera: {
            name: string;
            id: string;
            units: ({
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: never[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: null;
                attack_type: string;
            } | {
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: string[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: boolean;
                attack_type: string;
            })[];
            powers: string[];
            topic: string;
            description: string;
        };
        athena: {
            name: string;
            id: string;
            units: ({
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: never[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: null;
                attack_type: string;
            } | {
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: string[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: boolean;
                attack_type: string;
            })[];
            powers: string[];
            topic: string;
            description: string;
        };
        hades: {
            name: string;
            id: string;
            units: {
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: never[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: null;
                attack_type: string;
            }[];
            powers: string[];
            topic: string;
            description: string;
        };
        artemis: {
            name: string;
            id: string;
            units: ({
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: never[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: null;
                attack_type: string;
            } | {
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: string[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: boolean;
                attack_type: string;
            })[];
            powers: string[];
            topic: string;
            description: string;
        };
        aphrodite: {
            name: string;
            id: string;
            units: ({
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                    docks?: undefined;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: never[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: null;
                attack_type: string;
                defense?: undefined;
                transport?: undefined;
                capacity?: undefined;
            } | {
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                    docks: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: never[];
                passive: string;
                is_npc_unit_only: boolean;
                defense: number;
                transport: null;
                capacity: number;
                def_hack?: undefined;
                def_pierce?: undefined;
                def_distance?: undefined;
                booty?: undefined;
                infantry?: undefined;
                flying?: undefined;
                attack_type?: undefined;
            })[];
            powers: string[];
            topic: string;
            description: string;
        };
        ares: {
            name: string;
            id: string;
            units: ({
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                    barracks?: undefined;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: never[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: null;
                attack_type: string;
            } | {
                id: string;
                name: string;
                name_plural: string;
                speed: number;
                attack: number;
                description: string;
                resources: {
                    wood: number;
                    stone: number;
                    iron: number;
                };
                favor: number;
                population: number;
                build_time: number;
                god_id: string;
                research_dependencies: never[];
                building_dependencies: {
                    temple: number;
                    barracks: number;
                };
                is_naval: boolean;
                max_per_attack: null;
                max_per_support: null;
                unit_function: string;
                category: string;
                special_abilities: string[];
                passive: string;
                is_npc_unit_only: boolean;
                def_hack: number;
                def_pierce: number;
                def_distance: number;
                booty: number;
                infantry: null;
                flying: boolean;
                attack_type: string;
            })[];
            powers: string[];
            topic: string;
            description: string;
        };
    };
    artifacts: {
        storage_modification_for_domination_artifact: number;
    };
    texts: {
        curator_confirm: {
            title: string;
            content: string;
            check: string;
        };
        priest_confirm: {
            title: string;
            content: string;
            check: string;
        };
        trader_confirm: {
            title: string;
            content: string;
            check: string;
        };
        captain_confirm: {
            title: string;
            content: string;
            check: string;
        };
        commander_confirm: {
            title: string;
            content: string;
            check: string;
        };
    };
    currencies: {
        gold: {
            name: string;
            name_plural: string;
            id: string;
            is_game_player_currency: boolean;
            is_shop_currency: boolean;
        };
        laurels: {
            name: string;
            name_plural: string;
            id: string;
            is_game_player_currency: boolean;
            is_shop_currency: boolean;
        };
        battle_tokens: {
            name: string;
            name_plural: string;
            id: string;
            is_game_player_currency: boolean;
            is_shop_currency: boolean;
        };
        coins_of_wisdom: {
            name: string;
            name_plural: string;
            id: string;
            is_game_player_currency: boolean;
            is_shop_currency: boolean;
        };
        coins_of_war: {
            name: string;
            name_plural: string;
            id: string;
            is_game_player_currency: boolean;
            is_shop_currency: boolean;
        };
        coins_of_both: {
            name: string;
            name_plural: string;
            id: string;
            is_game_player_currency: boolean;
            is_shop_currency: boolean;
        };
        grid_battleships: {
            name: string;
            name_plural: string;
            id: string;
            is_game_player_currency: boolean;
            is_shop_currency: boolean;
        };
        grid_gods_gifts: {
            name: string;
            name_plural: string;
            id: string;
            is_game_player_currency: boolean;
            is_shop_currency: boolean;
        };
        grid_progression: {
            name: string;
            name_plural: string;
            id: string;
            is_game_player_currency: boolean;
            is_shop_currency: boolean;
        };
        rota_tyche_coins: {
            name: string;
            name_plural: string;
            id: string;
            is_game_player_currency: boolean;
            is_shop_currency: boolean;
        };
    };
};
