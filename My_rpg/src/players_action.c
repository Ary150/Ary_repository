/*
** ETNA PROJECT, 2022
** MY_RPG
** File description
** 		character_action.c
*/

#include "../include/rpg.h"
#include "../include/my.h"

// f) qui initialise un nouveau player
Player_t *new_player(Player_t *player_arr)
{
    Player_t *new_players;

    new_players = malloc(sizeof(new_players));     
    new_players->name = my_strdup(player_arr->name);
    new_players->hp = player_arr->hp;
    new_players->str = player_arr->str;
    new_players->mp = player_arr->mp;
    new_players->inte = player_arr->inte;
    new_players->def = player_arr->def;
    new_players->res = player_arr->res;
    new_players->spd = player_arr->spd;
    new_players->luck = player_arr->luck;
    new_players->hp_max = player_arr->hp_max;
            
    return (new_players);
}

//f) attaque qui soustrait les str p_a des hp de enem_a
void attack_player(Player_t **player_a, Enemy_t **enemy_a)
{
        (*enemy_a)->hp = (*enemy_a)->hp - (*player_a)->str;
}

//f) soins qui ajoute les hp init divisé par 2
void heal_player(Player_t **player_a)
{

        (*player_a)->hp += ((*player_a)->hp_max)/2;
}
