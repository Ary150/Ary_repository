/*
** ETNA PROJECT, 2022
** MY_RPG
** File description
** 		init_player.c
*/

#include "../include/Players.h"
#include "../include/my.h"

Player_t **init_player(void)
{
    Player_t **players;
    int i;

    i = 0;
    players = malloc(sizeof(players) * (6));
    if (!players)
        return (NULL);
    while (i < 5) {
        players[i] = malloc(sizeof(Player_t));
        if (!players[i])
            return (NULL);
        players[i]->name = my_strdup(Player_name[i]);
        players[i]->hp = Player_hp[i];
        players[i]->mp = Player_mp[i];
        players[i]->str = Player_str[i];
        players[i]->inte = Player_inte[i];
        players[i]->def = Player_def[i];
        players[i]->res = Player_res[i];
        players[i]->spd = Player_spd[i];
        players[i]->luck = Player_luck[i];
        players[i]->hp_max = players[i]->hp;
        i = i + 1;
    }
    players[i] = NULL;
    return (players);
}
