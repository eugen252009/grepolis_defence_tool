export type Town = {
    readonly player_id:                number;
    readonly name:                     string;
    readonly island_x:                 number;
    readonly island_y:                 number;
    readonly resources_last_update:    number;
    readonly resource_rare:            string;
    readonly resource_plenty:          string;
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
    readonly resources:                Production;
    readonly resources_contraints:     ResourcesContraints;
    readonly production:               Production;
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

export type Production = {
    readonly wood:  number;
    readonly stone: number;
    readonly iron:  number;
}

export type ResourcesContraints = {
    readonly plenty: string;
    readonly rare:   string;
}
