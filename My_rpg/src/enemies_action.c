/*
** ETNA PROJECT, 2022
** MY_RPG
** File description
** 		enemies_action.c
*/

#include "../include/rpg.h"
#include "../include/my.h"

// f) qui initialise un nouveau enemy
Enemy_t *new_enemy(Enemy_t *enemy_arr)
{
    Enemy_t *new_enemys;

    new_enemys = malloc(sizeof(new_enemys));
    new_enemys->name = my_strdup(enemy_arr->name);
    new_enemys->hp = enemy_arr->hp;
    new_enemys->str = enemy_arr->str;
    new_enemys->mp = enemy_arr->mp;
    new_enemys->inte = enemy_arr->inte;
    new_enemys->def = enemy_arr->def;
    new_enemys->res = enemy_arr->res;
    new_enemys->spd = enemy_arr->spd;
    new_enemys->luck = enemy_arr->luck;
            
    return (new_enemys);
}

//f) attaque qui soustrait les str enem_a des hp de p_a
void attack_enemy(Enemy_t **enemy_a, Player_t **player_a)
{
    (*player_a)->hp = (*player_a)->hp - (*enemy_a)->str;
}
